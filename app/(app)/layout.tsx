// app/(app)/layout.tsx
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AppShell } from "../_shared/layout-components/AppShell";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const refreshToken = cookieStore.get("refreshToken");

  // 🚫 Not logged in → block entire (app) group
  if (!refreshToken) {
    redirect("/login");
  }

  return <AppShell>{children}</AppShell>;
}
