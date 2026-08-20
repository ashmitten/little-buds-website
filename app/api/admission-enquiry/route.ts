import { NextResponse } from "next/server";

import { CONTACT } from "@/data/contact";
import {
  trimField,
  validateAdmissionEnquiry,
} from "@/lib/admission-enquiry";

async function parseAppsScriptResponse(response: Response) {
  const text = await response.text();

  if (!text) {
    return { ok: false as const, error: "Empty response from submission service." };
  }

  try {
    return JSON.parse(text) as { ok?: boolean; error?: string };
  } catch {
    return {
      ok: false as const,
      error: "Invalid response from submission service.",
    };
  }
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  if (trimField(body.website)) {
    return NextResponse.json({ ok: true });
  }

  const validated = validateAdmissionEnquiry(body);
  if (!validated.ok) {
    return NextResponse.json(
      { ok: false, error: validated.error },
      { status: validated.status },
    );
  }

  const scriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;
  if (!scriptUrl) {
    console.error("GOOGLE_APPS_SCRIPT_URL is not configured.");
    return NextResponse.json(
      {
        ok: false,
        error:
          "Submission service is not configured yet. Please contact the school directly.",
      },
      { status: 503 },
    );
  }

  const webhookSecret = process.env.ENQUIRY_WEBHOOK_SECRET;

  try {
    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...validated.data,
        ...(webhookSecret ? { webhookSecret } : {}),
      }),
      redirect: "follow",
      cache: "no-store",
    });

    const result = await parseAppsScriptResponse(response);

    if (!response.ok || !result.ok) {
      console.error("Apps Script submission failed:", result.error, response.status);
      return NextResponse.json(
        {
          ok: false,
          error:
            result.error ??
            "We could not save your enquiry. Please try again or call us.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Admission enquiry submission failed:", error);
    return NextResponse.json(
      {
        ok: false,
        error: `Submission failed. Please call us at ${CONTACT.phone}.`,
      },
      { status: 502 },
    );
  }
}
