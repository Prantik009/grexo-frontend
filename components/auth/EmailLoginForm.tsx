// components/auth/EmailLoginForm.tsx
"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "@/app/_shared/api/auth.api";
import { setAccessToken } from "@/app/_shared/api/axios";
import { useAuthStore } from "@/app/_shared/store/auth.store";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";

export default function EmailLoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = useAuthStore((s) => s.login);
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      setAccessToken(data.accessToken);
      login(data.user);
      router.push("/home");
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || "Login failed")
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({ email, password });
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
      <div className="text-right">
        <Link
          href="/resend-verification"
          className="text-xs text-primary hover:underline"
        >
          Didn’t verify your email?
        </Link>
      </div>


      <button
        type="submit"
        disabled={mutation.isPending}
        className="w-full h-12 rounded-xl bg-primary text-white disabled:opacity-70"
      >
        {mutation.isPending ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}

