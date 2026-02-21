// components/auth/EmailRegisterForm.tsx
"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { registerUser } from "@/app/_shared/api/auth.api";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { getErrorMessage } from "@/app/_shared/utils/getErrorMessage";

export default function EmailRegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      toast.success("Registered successfully. Please verify your email.");
      router.push("/login");
    },
    onError: (error) => {
      toast.error(getErrorMessage(error, "Registration failed"));
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({ name, email, password });
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

      <button
        type="submit"
        disabled={mutation.isPending}
        className="w-full h-12 rounded-xl bg-primary text-white disabled:opacity-70"
      >
        {mutation.isPending ? "Creating..." : "Create Account"}
      </button>
    </form>
  );
}
