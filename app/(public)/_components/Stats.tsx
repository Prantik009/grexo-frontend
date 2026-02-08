// app/(public)/_components/Stats.tsx
"use client"

import { STATS } from "@/app/(public)/_data/stats"
import { useViewport } from "@/app/_shared/hooks/useViewport"

export const Stats = () => {
    const { isMobile } = useViewport()

    return (
        <section className="border-none bg-secondary">
            <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
                <div
                    className={`grid gap-8 text-center ${isMobile ? "grid-cols-1" : "grid-cols-3"
                        }`}
                >
                    {STATS.map((stat) => (
                        <StatCard key={stat.label} {...stat} />
                    ))}
                </div>
            </div>
        </section>
    )
}

/* ---------------- CARD ---------------- */

const StatCard = ({
    label,
    value,
    icon: Icon,
}: {
    label: string
    value: string
    icon: React.ElementType
}) => {
    return (
        <div className="flex flex-col items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-background">
                <Icon className="h-7 w-7 text-primary" />
            </div>

            <p className="text-3xl font-bold text-foreground">
                {value}
            </p>

            <p className="text-sm font-medium text-muted-foreground">
                {label}
            </p>
        </div>
    )
}
