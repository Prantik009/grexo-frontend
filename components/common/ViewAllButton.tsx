"use client";

import { useRouter } from "next/navigation";
import { useAuthGuard } from "@/app/_shared/hooks/useAuthGuard";
import { AuthRequiredModal } from "@/components/auth/AuthRequiredModal";
import { Button } from "@/components/ui/button";

interface Props {
    href: string;
    children?: React.ReactNode;
}

export function ViewAllButton({ href, children }: Props) {
    const router = useRouter();
    const { authOpen, setAuthOpen, requireAuth } = useAuthGuard();

    const handleClick = () => {
        requireAuth(() => {
            router.push(href);
        });
    };

    return (
        <>
            <Button variant="ghost" onClick={handleClick}>
                {children ?? "View All"}
            </Button>

            <AuthRequiredModal
                open={authOpen}
                onOpenChange={setAuthOpen}
            />
        </>
    );
}