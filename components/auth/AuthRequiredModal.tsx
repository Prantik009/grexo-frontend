"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import GoogleButton from "../auth/GoogleButton";
import EmailLoginForm from "../auth/EmailLoginForm";

interface AuthRequiredModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAuthSuccess?: () => void;
}

export default function AuthRequiredModal({
  open,
  onOpenChange,
  onAuthSuccess,
}: AuthRequiredModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md p-6 space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-xl font-semibold">Login Required</h2>
          <p className="text-sm text-muted-foreground">
            Please login to continue
          </p>
        </div>

        {/* Google Login */}
        <GoogleButton onAuthSuccess={onAuthSuccess} />

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with email
            </span>
          </div>
        </div>

        {/* Email Login */}
        <EmailLoginForm onAuthSuccess={onAuthSuccess} />
      </DialogContent>
    </Dialog>
  );
}
