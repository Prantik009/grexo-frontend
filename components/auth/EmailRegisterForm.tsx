"use client";

import { useState } from "react";
import { registerUser } from "@/app/_shared/api/auth.api";
import { useRouter } from "next/navigation";

export default function EmailRegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await registerUser({ name, email, password });
      alert("Registered successfully. Please verify your email.");
      router.push("/login");
    } catch (err: any) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full h-12 px-4 rounded-xl border"
        required
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full h-12 px-4 rounded-xl border"
        required
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full h-12 px-4 rounded-xl border"
        required
      />

      <button className="w-full h-12 rounded-xl bg-primary text-white">
        Create Account
      </button>
    </form>
  );
}
