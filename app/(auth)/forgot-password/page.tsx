"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { forgotPassword } from "@/app/_shared/api/auth.api";

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState("");

    const mutation = useMutation({
        mutationFn: forgotPassword,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutation.mutate(email);
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-background">
            <div className="w-full max-w-md p-8 rounded-xl shadow-md bg-white">
                <h1 className="text-2xl font-semibold mb-6 text-center">
                    Forgot Password
                </h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full border rounded-md p-3"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <button
                        type="submit"
                        disabled={mutation.isPending}
                        className="w-full bg-black text-white p-3 rounded-md hover:opacity-90"
                    >
                        {mutation.isPending ? "Sending..." : "Send Reset Link"}
                    </button>
                </form>

                {mutation.isSuccess && (
                    <p className="text-green-600 mt-4 text-sm text-center">
                        Reset link sent to your email.
                    </p>
                )}

                {mutation.isError && (
                    <p className="text-red-600 mt-4 text-sm text-center">
                        Something went wrong.
                    </p>
                )}
            </div>
        </div>
    );
}
