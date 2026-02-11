// app/(auth)/login/page.tsx
"use client";

import GoogleButton from "@/components/auth/GoogleButton";
import EmailLoginForm from "@/components/auth/EmailLoginForm";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-md space-y-6">

                {/* Brand */}
                <div className="text-center space-y-1">
                    <h1 className="text-2xl font-semibold flex items-center gap-1 justify-center">Welcome to <span> <Image src="/grexo_logo.webp" alt="grexo_logo" width={100} height={100} className="mt-1" /> </span></h1>
                    <p className="text-sm text-muted-foreground">
                        Grow something beautiful today 🌱
                    </p>
                </div>

                {/* Google Auth */}
                <GoogleButton />

                {/* Divider */}
                <div className="flex items-center gap-3">
                    <div className="h-px flex-1 bg-border" />
                    <span className="text-xs text-muted-foreground">OR</span>
                    <div className="h-px flex-1 bg-border" />
                </div>

                {/* Email Auth */}
                <EmailLoginForm />
                {/* Switch */}
                <p className="text-sm text-center text-muted-forground">
                    Don't have an account?{" "}
                    <Link
                        href="/register"
                        className="text-primary font-medium hover:underline"
                    >
                        Register
                    </Link>
                </p>

                {/* Legal */}
                <p className="text-xs text-muted-foreground text-center">
                    By continuing, you agree to our Terms & Privacy Policy.
                </p>
            </div>
        </div>
    );
}
