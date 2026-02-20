// components/auth/AuthRequiredModal.tsx

"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import GoogleButton from "./GoogleButton";
import EmailLoginForm from "./EmailLoginForm";

interface Props {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function AuthRequiredModal({ open, onOpenChange }: Props) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-90">
                <h3 className="text-lg font-semibold text-center">
                    Login to continue
                </h3>

                <p className="text-sm text-muted-foreground text-center">
                    Please login to manage your cart and place orders 🌱
                </p>

                <div className="space-y-4 mt-4">
                    <GoogleButton />
                    <EmailLoginForm />
                </div>
            </DialogContent>
        </Dialog>
    );
}