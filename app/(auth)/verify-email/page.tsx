// app/(auth)/verify-email/page.tsx
"use client";

import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import api from "@/app/_shared/api/axios";

export default function VerifyEmailPage() {
    const params = useSearchParams();
    const router = useRouter();

    useEffect(() => {
        const token = params.get("token");

        if (!token) return;

        const verify = async () => {
            try {
                await api.get(`/auth/verify-email?token=${token}`);
                alert("Email verified successfully!");
                router.push("/login");
            } catch {
                alert("Invalid or expired token");
            }
        };

        verify();
    }, [params, router]);

    return <p className="text-center mt-10">Verifying email...</p>;
}
