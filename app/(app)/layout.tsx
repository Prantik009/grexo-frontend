// app/(app)/layout.tsx
import { AppShell } from "../_shared/layout-components/AppShell";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AppShell>{children}</AppShell>;
}
