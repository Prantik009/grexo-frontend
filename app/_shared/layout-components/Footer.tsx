// app/_components/footer/Footer.tsx
"use client"

import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useViewport } from "@/app/_shared/hooks/useViewport"

export const Footer = () => {
    const { isMobile } = useViewport()

    return (
        <footer className="border-t bg-background">
            <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
                <div
                    className={`grid gap-10 ${isMobile
                        ? "grid-cols-1"
                        : "grid-cols-[1.2fr_2fr_1.2fr]"
                        }`}
                >
                    {/* ---------------- COMPANY ---------------- */}
                    <div className="space-y-3">
                        <Link href="/" className="shrink-0">
                            <img src="/grexo_logo.webp" alt="Grexo" className=" h-8 sm:h-12 " />
                        </Link>

                        <p className="text-sm text-muted-foreground">
                            Bringing nature closer to your home.
                        </p>

                        <p className="text-sm text-muted-foreground">
                            Kolkata, West Bengal, India
                        </p>

                        <p className="pt-4 text-xs text-muted-foreground">
                            © {new Date().getFullYear()} Grexo. All rights reserved.
                        </p>
                    </div>

                    {/* ---------------- LINKS ---------------- */}
                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
                        {/* About */}
                        <FooterColumn
                            title="Company"
                            links={[
                                { label: "About Us", href: "/about" },
                                { label: "Our Story", href: "/story" },
                                { label: "Careers", href: "/careers" },
                            ]}
                        />

                        {/* Customer Care */}
                        <FooterColumn
                            title="Customer Care"
                            links={[
                                { label: "Shipping Policy", href: "/shipping" },
                                { label: "Privacy Policy", href: "/privacy" },
                                { label: "Terms & Conditions", href: "/terms" },
                                { label: "Track Order", href: "/track-order" },
                            ]}
                        />

                        {/* Offers */}
                        <FooterColumn
                            title="Offers"
                            links={[
                                { label: "New Arrivals", href: "/new" },
                                { label: "Best Sellers", href: "/best-sellers" },
                                { label: "Discounts", href: "/offers" },
                            ]}
                        />

                        {/* Top Categories */}
                        <FooterColumn
                            title="Top Categories"
                            links={[
                                { label: "Indoor Plants", href: "/plants/indoor" },
                                { label: "Seeds", href: "/seeds" },
                                { label: "Ceramic Pots", href: "/pots" },
                                { label: "Corporate Gifts", href: "/gifting" },
                            ]}
                        />
                    </div>

                    {/* ---------------- NEWSLETTER ---------------- */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-primary">
                            Join our newsletter
                        </h3>

                        <p className="text-sm text-muted-foreground">
                            Get plant care tips, offers & new arrivals.
                        </p>

                        <div className="flex gap-2">
                            <Input
                                type="email"
                                placeholder="Your email"
                                className="h-9"
                            />
                            <Button size="sm">Subscribe</Button>
                        </div>

                        {/* Socials */}
                        <div className="flex gap-4 pt-4">
                            <SocialIcon href="#" icon={<Facebook />} />
                            <SocialIcon href="#" icon={<Instagram />} />
                            <SocialIcon href="#" icon={<Twitter />} />
                            <SocialIcon href="#" icon={<Linkedin />} />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

/* ---------------- SUB COMPONENTS ---------------- */

const FooterColumn = ({
    title,
    links,
}: {
    title: string
    links: { label: string; href: string }[]
}) => (
    <div>
        <h4 className="mb-3 text-sm font-semibold text-primary">
            {title}
        </h4>
        <ul className="space-y-2">
            {links.map((link) => (
                <li key={link.label}>
                    <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        {link.label}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
)

const SocialIcon = ({
    href,
    icon,
}: {
    href: string
    icon: React.ReactNode
}) => (
    <Link
        href={href}
        className="text-muted-foreground hover:text-primary transition-colors"
    >
        {icon}
    </Link>
)
