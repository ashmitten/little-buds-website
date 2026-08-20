"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { programmes } from "@/data/programmes";
import { CONTACT } from "@/data/contact";
import { cn } from "@/lib/utils";

interface FormData {
  parentName: string;
  childName: string;
  contactNumber: string;
  email: string;
  childAge: string;
  programmeInterest: string;
}

const initialFormData: FormData = {
  parentName: "",
  childName: "",
  contactNumber: "",
  email: "",
  childAge: "",
  programmeInterest: "",
};

export function AdmissionEnquiryForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [website, setWebsite] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/admission-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, website }),
      });

      const result = (await response.json()) as {
        ok?: boolean;
        error?: string;
      };

      if (!response.ok || !result.ok) {
        setError(result.error ?? "Something went wrong. Please try again.");
        return;
      }

      setIsSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <div
        className="rounded-2xl border border-brand-green/20 bg-brand-green/5 p-8 text-center"
        role="status"
        aria-live="polite"
      >
        <div
          className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-green/15 text-brand-green"
          aria-hidden="true"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h2 className="font-display text-2xl font-bold text-primary">
          Thank You for Your Enquiry
        </h2>
        <p className="mt-3 text-muted">
          We have received your admission enquiry. A member of the Little Buds
          team will be in touch with you shortly.
        </p>
        <p className="mt-4 text-sm text-muted">
          Or call us on{" "}
          <a
            href={CONTACT.phoneHref}
            className="font-medium text-primary underline-offset-2 hover:underline"
          >
            {CONTACT.phone}
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="relative space-y-6">
      <input
        type="text"
        name="website"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />

      {error && (
        <div
          className="rounded-xl border border-brand-coral/30 bg-brand-coral/5 px-4 py-3 text-sm text-brand-coral"
          role="alert"
        >
          {error}
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="parentName">Name of Parent / Guardian</Label>
        <Input
          id="parentName"
          name="parentName"
          type="text"
          required
          autoComplete="name"
          placeholder="Enter your full name"
          value={formData.parentName}
          onChange={handleChange}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="childName" optional>
          Name of Child
        </Label>
        <Input
          id="childName"
          name="childName"
          type="text"
          autoComplete="off"
          placeholder="Enter your child's name"
          value={formData.childName}
          onChange={handleChange}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="contactNumber">Contact Number</Label>
        <Input
          id="contactNumber"
          name="contactNumber"
          type="tel"
          required
          autoComplete="tel"
          placeholder="Enter your phone number"
          value={formData.contactNumber}
          onChange={handleChange}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" optional>
          Email Address
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Enter your email address"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="childAge" optional>
          Age of Child
        </Label>
        <Input
          id="childAge"
          name="childAge"
          type="text"
          autoComplete="off"
          placeholder="e.g. 3 years"
          value={formData.childAge}
          onChange={handleChange}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="programmeInterest" optional>
          Programme of Interest
        </Label>
        <Select
          id="programmeInterest"
          name="programmeInterest"
          value={formData.programmeInterest}
          onChange={handleChange}
        >
          <option value="">Not sure yet</option>
          {programmes.map((programme) => (
            <option key={programme.id} value={programme.name}>
              {programme.name} ({programme.ageRange})
            </option>
          ))}
        </Select>
      </div>

      <div className="pt-2">
        <Button
          type="submit"
          variant="action"
          size="lg"
          className={cn("w-full sm:w-auto", isSubmitting && "opacity-80")}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting…" : "Submit Enquiry"}
        </Button>
      </div>
    </form>
  );
}
