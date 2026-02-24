// app/_shared/layout-components/Header.tsx

"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Search, ShoppingCart, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { useViewport } from "@/app/_shared/hooks/useViewport";
import { NAV_LINKS } from "../../config/nav.config";
import { SearchModal } from "./SearchModal";
import { useRouter } from "next/navigation";
import { useAuthStore } from "../store/auth.store";
import CartSidebar from "./CartSidebar";
import AuthRequiredModal from "@/components/auth/AuthRequiredModal";
import { logoutUser } from "../api/auth.api";
import { useMutation } from "@tanstack/react-query";
import { useCart } from "@/app/_shared/cart/hooks/useCart";
import Image from "next/image";

export function Header() {
  const { isMobile } = useViewport();

  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);

  const router = useRouter();

  // ✅ SINGLE source of truth
  const { accessToken, user, logout } = useAuthStore();
  const isAuthenticated = !!accessToken;
  const { cart } = useCart();
  const totalItems =
    cart?.items?.reduce((sum, item) => sum + item.quantity, 0) ?? 0;

  const handleCartClick = () => {
    setCartOpen(true); // ✅ genuine buyer
  };

  const logoutMutation = useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      logout();
      router.push("/");
    },
    onError: () => {
      // Even if API fails, clear local auth
      logout();
      router.push("/");
    },
  });

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-background">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-3 px-3 md:px-6">
          {/* MOBILE: Hamburger */}
          {isMobile && (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>

              <SheetContent side="left" className="w-72 p-4">
                <nav className="mt-4">
                  <Accordion type="multiple">
                    {NAV_LINKS.map((item) =>
                      item.children ? (
                        <AccordionItem key={item.label} value={item.label}>
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
                      ),
                    )}
                  </Accordion>
                </nav>
              </SheetContent>
            </Sheet>
          )}

          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/grexo_logo.webp"
              alt="Grexo"
              className="h-8 sm:h-12"
              height={100}
              width={100}
            />
          </Link>

          {/* Desktop Search */}
          {!isMobile && (
            <div className="mx-6 w-[42%]">
              <Input placeholder="Search plants..." className="h-9" />
            </div>
          )}

          {/* Mobile Search */}
          {isMobile && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
            </Button>
          )}

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* 🔐 AUTHENTICATED USER */}
            {isAuthenticated ? (
              <>
                {!isMobile && (
                  <span className="flex items-center gap-1 text-sm font-medium">
                    <User className="h-4 w-4" />
                    Hi, {user?.name}
                  </span>
                )}

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleCartClick}
                  className="relative"
                >
                  <ShoppingCart className="h-5 w-5" />

                  {totalItems > 0 && (
                    <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-semibold text-white">
                      {totalItems}
                    </span>
                  )}
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleLogout}
                  className="text-xs"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => router.push("/login")}
                >
                  <User className="h-5 w-5" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleCartClick}
                  className="relative"
                >
                  <ShoppingCart className="h-5 w-5" />

                  {totalItems > 0 && (
                    <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-semibold text-white">
                      {totalItems}
                    </span>
                  )}
                </Button>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Modals */}
      <SearchModal open={searchOpen} onOpenChange={setSearchOpen} />

      <CartSidebar open={cartOpen} onOpenChange={setCartOpen} />

      <AuthRequiredModal
        open={authOpen}
        onOpenChange={() => setAuthOpen(false)}
      />
    </>
  );
}
