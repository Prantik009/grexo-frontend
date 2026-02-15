// app/(auth)/verify-email/page.tsx
"use client";

import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import api from "@/app/_shared/api/axios";
import { toast } from "sonner";

export default function VerifyEmailPage() {
    const params = useSearchParams();
    const router = useRouter();

    useEffect(() => {
        const token = params.get("token");

        if (!token) return;

        const verify = async () => {
            try {
                await api.get(`/auth/verify-email?token=${token}`);
                toast.success("Email verified successfully!");
                router.push("/login");
            } catch {
                toast.error("Invalid or expired token");
            }
        };

        verify();
    }, [params, router]);

    return <p className="text-center mt-10">Verifying email...</p>;
}
