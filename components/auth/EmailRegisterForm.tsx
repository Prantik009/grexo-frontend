"use client";

import { useState } from "react";

export default function EmailRegisterForm() {
  const [email, setEmail] = useState("");

  return (
    <form className="space-y-3">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full h-12 px-4 rounded-xl border bg-background outline-none focus:ring-2 focus:ring-primary"
        required
      />

      <button
        type="submit"
        className="w-full h-12 rounded-xl bg-primary text-white font-medium hover:opacity-90 transition"
      >
        Create Account
      </button>

      <p className="text-xs text-muted text-center">
        We’ll send a secure login link to your email
      </p>
    </form>
  );
}
