"use client";

import { useState } from "react";
import { loginUser } from "@/app/_shared/api/auth.api";
import { setAccessToken } from "@/app/_shared/api/axios";
import { useAuthStore } from "@/app/_shared/store/auth.store";
import { useRouter } from "next/navigation";

export default function EmailLoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = useAuthStore((s) => s.login);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { data } = await loginUser({ email, password });

      setAccessToken(data.accessToken);

      login(data.user);


      router.push("/home");
    } catch (err: any) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
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
        Login
      </button>
    </form>
  );
}
