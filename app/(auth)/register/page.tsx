// app/(auth)/register/page.tsx
"use client";

import GoogleButton from "@/components/auth/GoogleButton";
import EmailRegisterForm from "@/components/auth/EmailRegisterForm";
import Link from "next/link";
import Image from "next/image";

export default function RegisterPage() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-md space-y-6">

                {/* Brand */}
                <div className="text-center space-y-1">
                    <h1 className="text-2xl font-semibold flex items-center justify-center gap-1">
                        Create your <span> <Image src="/grexo_logo.webp" alt="grexo_logo" width={100} height={100} className="mt-1" /> </span> account
                    </h1>
                    <p className="text-sm text-muted-forground">
                        Start your green journey with us 🌿
                    </p>
                </div>

                {/* Google */}
                <GoogleButton />

                {/* Divider */}
                <div className="flex items-center gap-3">
                    <div className="h-px flex-1 bg-border" />
                    <span className="text-xs text-muted-forground">OR</span>
                    <div className="h-px flex-1 bg-border" />
                </div>

                {/* Email */}
                <EmailRegisterForm />

                {/* Switch */}
                <p className="text-sm text-center text-muted-forground">
                    Already have an account?{" "}
                    <Link
                        href="/login"
                        className="text-primary font-medium hover:underline"
                    >
                        Login
                    </Link>
                </p>

                {/* Legal */}
                <p className="text-xs text-muted-forground text-center">
                    By creating an account, you agree to our Terms & Privacy Policy.
                </p>
            </div>
        </div>
    );
}
