/** Shared admission enquiry validation — used by API route and form types */

export interface AdmissionEnquiryPayload {
  parentName: string;
  childName: string;
  contactNumber: string;
  email: string;
  childAge: string;
  programmeInterest: string;
}

export const PHONE_PATTERN = /^[\d\s+\-().]{7,20}$/;
export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function trimField(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export function validateAdmissionEnquiry(body: {
  parentName?: unknown;
  childName?: unknown;
  contactNumber?: unknown;
  email?: unknown;
  childAge?: unknown;
  programmeInterest?: unknown;
  website?: unknown;
}):
  | { ok: true; data: AdmissionEnquiryPayload }
  | { ok: false; error: string; status: number } {
  if (trimField(body.website)) {
    return { ok: false, error: "Spam detected.", status: 400 };
  }

  const parentName = trimField(body.parentName);
  const contactNumber = trimField(body.contactNumber);
  const email = trimField(body.email);

  if (!parentName || !contactNumber) {
    return {
      ok: false,
      error: "Parent name and contact number are required.",
      status: 400,
    };
  }

  if (!PHONE_PATTERN.test(contactNumber)) {
    return {
      ok: false,
      error: "Please enter a valid contact number.",
      status: 400,
    };
  }

  if (email && !EMAIL_PATTERN.test(email)) {
    return {
      ok: false,
      error: "Please enter a valid email address.",
      status: 400,
    };
  }

  return {
    ok: true,
    data: {
      parentName,
      childName: trimField(body.childName),
      contactNumber,
      email,
      childAge: trimField(body.childAge),
      programmeInterest: trimField(body.programmeInterest),
    },
  };
}
