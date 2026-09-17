"use client";

import { useState } from "react";

const INTERESTS = [
  "Investment",
  "Business Transformation",
  "Digital Transformation",
  "Venture Development",
  "Strategic Partnership",
  "Technology",
  "Market Entry",
  "Advisory",
  "Media",
  "Careers",
];

// Get a free access key at https://web3forms.com (no card required) and
// paste it below, or set NEXT_PUBLIC_WEB3FORMS_KEY as an environment
// variable so it isn't hardcoded into the repo.
const ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_WEB3FORMS_ACCESS_KEY";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (ACCESS_KEY === "YOUR_WEB3FORMS_ACCESS_KEY") {
      setStatus("error");
      setErrorMsg(
        "Form is not yet connected. Add your Web3Forms access key to enable submissions."
      );
      return;
    }

    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", ACCESS_KEY);
    formData.append("subject", "New enquiry from E-Markets Africa website");

    // Combine checked interests into one readable field
    const interests = INTERESTS.filter(
      (i) => formData.get(`interest_${i}`) === "on"
    );
    formData.set("Interested In", interests.join(", ") || "Not specified");
    INTERESTS.forEach((i) => formData.delete(`interest_${i}`));

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-navy/8 bg-cream p-10 text-center">
        <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center mx-auto mb-5">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M4 10l4 4 8-8"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-navy font-display mb-2">
          Message sent.
        </h3>
        <p className="text-sm text-[#6B7280] max-w-sm mx-auto">
          Thank you for reaching out. We&apos;ll review your message and
          respond as soon as possible.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-gold hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-semibold text-navy mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full border border-navy/15 px-4 py-3 text-sm focus:outline-none focus:border-gold"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-navy mb-2">
            Organisation
          </label>
          <input
            type="text"
            name="organisation"
            className="w-full border border-navy/15 px-4 py-3 text-sm focus:outline-none focus:border-gold"
            placeholder="Company or institution"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-navy mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full border border-navy/15 px-4 py-3 text-sm focus:outline-none focus:border-gold"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-navy mb-2">
            Country
          </label>
          <input
            type="text"
            name="country"
            className="w-full border border-navy/15 px-4 py-3 text-sm focus:outline-none focus:border-gold"
            placeholder="Country"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-navy mb-3">
          I&apos;m interested in
        </label>
        <div className="flex flex-wrap gap-2">
          {INTERESTS.map((i) => (
            <label
              key={i}
              className="flex items-center gap-2 text-xs font-medium text-[#4B5563] border border-navy/15 px-3 py-2 cursor-pointer hover:border-navy/40"
            >
              <input
                type="checkbox"
                name={`interest_${i}`}
                className="accent-navy"
              />
              {i}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-navy mb-2">
          Message
        </label>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full border border-navy/15 px-4 py-3 text-sm focus:outline-none focus:border-gold"
          placeholder="Tell us what you're trying to accomplish"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600 font-medium">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center gap-3 bg-navy text-white font-semibold text-sm px-8 py-4 hover:bg-navy-light transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
