"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Search, ShoppingCart, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { useViewport } from "@/app/_shared/hooks/useViewport";
import { NAV_LINKS } from "../../config/nav.config";
import { SearchModal } from "./SearchModal";

export function Header() {
    const { isMobile } = useViewport();
    const [searchOpen, setSearchOpen] = useState(false);

    // TEMP auth state
    const isLoggedIn = true;
    const userName = "Prantik";

    return (
        <>
            <header className="sticky top-0 z-50 border-none bg-background">
                <div className="mx-auto flex h-14 max-w-7xl items-center gap-3 px-3 md:px-6 justify-between">

                    {/* MOBILE: Hamburger */}
                    {isMobile && (
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" aria-label="Open menu">
                                    <Menu className="h-5 w-5" />
                                </Button>
                            </SheetTrigger>

                            <SheetContent side="left" className="w-70 p-4">
                                <nav className="mt-4">

                                    <Accordion type="multiple" className="w-full">
                                        {NAV_LINKS.map((item) =>
                                            item.children ? (
                                                <AccordionItem
                                                    key={item.label}
                                                    value={item.label}
                                                >
                                                    <AccordionTrigger className="text-sm font-medium">
                                                        {item.label}
                                                    </AccordionTrigger>
                                                    <AccordionContent>
                                                        <div className="flex flex-col gap-1 pl-2">
                                                            {item.children.map((child) => (
                                                                <Link
                                                                    key={child.href}
                                                                    href={child.href}
                                                                    className="rounded-md px-2 py-1 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                                                                >
                                                                    {child.label}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </AccordionContent>
                                                </AccordionItem>
                                            ) : (
                                                <Link
                                                    key={item.label}
                                                    href={item.href!}
                                                    className="block rounded-md px-2 py-2 text-sm font-medium hover:bg-muted"
                                                >
                                                    {item.label}
                                                </Link>
                                            )
                                        )}
                                    </Accordion>

                                </nav>
                            </SheetContent>
                        </Sheet>
                    )}

                    {/* Logo */}
                    <Link href="/" className="shrink-0">
                        <img src="/grexo_logo.webp" alt="Grexo" className="h-8 sm:h-12 " />
                    </Link>
                    {/* Spacer */}
                    <div className="flex-1" />

                    {/* DESKTOP: Search (40–45%) */}
                    {!isMobile && (
                        <div className="mx-6 w-[42%]">
                            <Input
                                placeholder="Search plants..."
                                className="h-9"
                            />
                        </div>
                    )}

                    {/* Spacer */}
                    <div className="flex-1" />

                    {/* MOBILE: Search Icon */}
                    {isMobile && (
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setSearchOpen(true)}
                        >
                            <Search className="h-5 w-5" />
                        </Button>
                    )}

                    {/* User / Cart */}
                    <div className="flex items-center gap-2">
                        {isLoggedIn ? (
                            <>
                                {!isMobile && (
                                    <span className="text-sm font-medium flex items-center gap-1">
                                        <span><User className="h-5 w-5" /></span>Hi, {userName}
                                    </span>
                                )}
                                <Button variant="ghost" size="icon">
                                    <ShoppingCart className="h-5 w-5" />
                                </Button>
                            </>
                        ) : (
                            <Button variant="ghost" size="icon">
                                <User className="h-5 w-5" />
                            </Button>
                        )}
                    </div>
                </div>
            </header>

            {/* Search Modal (mobile only trigger, but safe globally) */}
            <SearchModal open={searchOpen} onOpenChange={setSearchOpen} />
        </>
    );
}
