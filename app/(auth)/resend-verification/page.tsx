"use client";

import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { resendVerification } from "@/app/_shared/api/auth.api";
import Link from "next/link";
import Image from "next/image";

export default function ResendVerificationPage() {
    const [email, setEmail] = useState("");

    const [cooldown, setCooldown] = useState(0);

    const mutation = useMutation({
        mutationFn: resendVerification,
        onSuccess: () => {
            setCooldown(30); // 30 second lock
        },
    });

    useEffect(() => {
        if (cooldown <= 0) return;

        const timer = setInterval(() => {
            setCooldown((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [cooldown]);


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutation.mutate(email);
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-md space-y-6">

                {/* Brand */}
                <div className="text-center space-y-1">
                    <h1 className="text-2xl font-semibold flex items-center justify-center gap-1">
                        Resend verification for
                        <span>
                            <Image
                                src="/grexo_logo.webp"
                                alt="grexo_logo"
                                width={100}
                                height={100}
                                className="mt-1"
                            />
                        </span>
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        Didn’t receive the email? We’ll send it again 📩
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3">
                    <input
                        type="email"
                        placeholder="Enter your registered email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full h-12 px-4 rounded-xl border"
                        required
                    />

                    <button
                        type="submit"
                        disabled={mutation.isPending || cooldown > 0}
                        className="w-full h-12 rounded-xl bg-primary text-white disabled:opacity-70"
                    >
                        {mutation.isPending
                            ? "Sending..."
                            : cooldown > 0
                                ? `Resend in ${cooldown}s`
                                : "Resend Verification Email"}
                    </button>

                </form>

                {mutation.isSuccess && (
                    <p className="text-green-600 text-sm text-center">
                        Verification email sent successfully.
                    </p>
                )}

                {mutation.isError && (
                    <p className="text-red-600 text-sm text-center">
                        Something went wrong.
                    </p>
                )}

                <p className="text-sm text-center text-muted-foreground">
                    Back to{" "}
                    <Link
                        href="/login"
                        className="text-primary font-medium hover:underline"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}
