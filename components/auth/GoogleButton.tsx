// components/auth/GoogleButton.tsx
"use client";

import { GoogleLogin } from "@react-oauth/google";
import api from "@/app/_shared/api/axios";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/app/_shared/store/auth.store";

export default function GoogleButton({
  onAuthSuccess,
}: {
  onAuthSuccess?: () => void;
}) {
  const router = useRouter();
  const login = useAuthStore((s) => s.login);

  return (
    <div className="w-full bg-background flex h-11 items-center justify-center rounded-md overflow-hidden">
      <GoogleLogin
        onSuccess={async (credentialResponse) => {
          try {
            const idToken = credentialResponse.credential;

            const response = await api.post(
              "/auth/google",
              { idToken },
              { withCredentials: true },
            );

            login(response.data.user, response.data.accessToken);

            if (onAuthSuccess) {
              onAuthSuccess();
            } else {
              console.log("Login success, pushing to shop...");
              router.push("/shop");
            }
          } catch (error) {
            console.error("Google login failed", error);
          }
        }}
        onError={() => {
          console.log("Google Login Failed");
        }}
        theme="outline"
        size="large"
        text="continue_with"
        shape="rectangular"
        width="100%"
        logo_alignment="left"
      />
    </div>
  );
}
