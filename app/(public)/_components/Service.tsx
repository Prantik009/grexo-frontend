// app/_components/services/Services.tsx
"use client"

import {
    Truck,
    Headset,
    ShieldCheck,
    RefreshCcw,
} from "lucide-react"

import { useViewport } from "@/app/_shared/hooks/useViewport"

const SERVICES = [
    {
        title: "Free Delivery",
        description: "On orders above ₹999",
        icon: Truck,
    },
    {
        title: "24×7 Support",
        description: "We’re here when you need us",
        icon: Headset,
    },
    {
        title: "Secure Payments",
        description: "Powered by Razorpay",
        icon: ShieldCheck,
    },
    {
        title: "7 Days Replacement",
        description: "No questions asked",
        icon: RefreshCcw,
    },
]

export const Services = () => {
    const { isMobile } = useViewport()

    return (
        <section className="border-none bg-background">
            <div className="mx-auto max-w-7xl px-4 py-6 md:px-6">
                <div
                    className={`grid gap-6 ${isMobile
                            ? "grid-cols-1"
                            : "grid-cols-4"
                        }`}
                >
                    {SERVICES.map((service) => (
                        <ServiceCard key={service.title} {...service} />
                    ))}
                </div>
            </div>
        </section>
    )
}

/* ---------------- CARD ---------------- */

const ServiceCard = ({
    title,
    description,
    icon: Icon,
}: {
    title: string
    description: string
    icon: React.ElementType
}) => {
    return (
        <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                <Icon className="h-5 w-5 text-primary" />
            </div>

            <div>
                <p className="text-sm font-medium text-primary">
                    {title}
                </p>
                <p className="text-xs text-muted-foreground">
                    {description}
                </p>
            </div>
        </div>
    )
}
