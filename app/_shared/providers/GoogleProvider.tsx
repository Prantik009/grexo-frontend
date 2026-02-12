// app/_shared/providers/GoogleProvider.tsx
"use client";

import { GoogleOAuthProvider } from "@react-oauth/google";
import { ENV } from "@/app/config/env";

export default function GoogleProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GoogleOAuthProvider clientId={ENV.GOOGLE_CLIENT_ID}>
      {children}
    </GoogleOAuthProvider>
  );
}
