// components/auth/GoogleButton.tsx
"use client";

import { GoogleLogin } from "@react-oauth/google";
import axios, { setAccessToken } from "@/app/_shared/api/axios";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/app/_shared/store/auth.store";

export default function GoogleButton({
  onAuthSuccess,
}: {
  onAuthSuccess?: () => void;
}) {
  const router = useRouter();

  return (
    <div className="w-full bg-background flex h-11 items-center justify-center rounded-md overflow-hidden">
      <GoogleLogin
        onSuccess={async (credentialResponse) => {
          try {
            const idToken = credentialResponse.credential;

            const response = await axios.post(
              "/auth/google",
              { idToken },
              { withCredentials: true },
            );

            setAccessToken(response.data.accessToken);
            useAuthStore.getState().login(response.data.user);
            useAuthStore.getState().login(response.data.user);

            if (onAuthSuccess) {
              onAuthSuccess(); // modal flow
            } else {
              router.push("/shop"); // login page flow
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
