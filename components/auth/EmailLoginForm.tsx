"use client";

import { useState } from "react";

export default function EmailLoginForm() {
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
        Continue with Email
      </button>

      <p className="text-xs text-muted-foreground text-center">
        We’ll send you a secure login link
      </p>
    </form>
  );
}
