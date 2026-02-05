"use client"

import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { NAV_LINKS } from "@/app/config/nav.config"
import { ChevronDown } from "lucide-react"

export function Navbar() {
  return (
    <nav className="hidden md:block border-b bg-background">
      <div className="mx-auto flex h-12 max-w-7xl items-center justify-center gap-8 px-6">
        {NAV_LINKS.map((item) =>
          item.children ? (
            <DropdownMenu key={item.label}>
              <DropdownMenuTrigger
                className="flex items-center gap-1 text-sm font-medium uppercase text-muted-foreground hover:text-foreground transition-colors outline-none"
              >
                {item.label}
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>

              <DropdownMenuContent align="center" className="w-48">
                {item.children.map((child) => (
                  <DropdownMenuItem key={child.href} asChild>
                    <Link href={child.href} className="w-full">
                      {child.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link
              key={item.label}
              href={item.href!}
              className="text-sm font-medium uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          )
        )}
      </div>
    </nav>
  )
}
