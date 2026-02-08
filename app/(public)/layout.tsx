// app/(public)/layout.tsx
import { AppShell } from "../_shared/layout-components/AppShell";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AppShell>{children}</AppShell>;
}
