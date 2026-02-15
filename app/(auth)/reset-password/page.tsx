"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { resetPassword } from "@/app/_shared/api/auth.api";

export default function ResetPasswordPage() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const token = searchParams.get("token") || "";

    const [password, setPassword] = useState("");

    const mutation = useMutation({
        mutationFn: resetPassword,
        onSuccess: () => {
            router.push("/login");
        },
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutation.mutate({ token, password });
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-background">
            <div className="w-full max-w-md p-8 rounded-xl shadow-md bg-white">
                <h1 className="text-2xl font-semibold mb-6 text-center">
                    Reset Password
                </h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="password"
                        placeholder="Enter new password"
                        className="w-full border rounded-md p-3"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button
                        type="submit"
                        disabled={mutation.isPending}
                        className="w-full bg-black text-white p-3 rounded-md hover:opacity-90"
                    >
                        {mutation.isPending ? "Resetting..." : "Reset Password"}
                    </button>
                </form>

                {mutation.isError && (
                    <p className="text-red-600 mt-4 text-sm text-center">
                        Invalid or expired token.
                    </p>
                )}
            </div>
        </div>
    );
}
