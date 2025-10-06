"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Features", href: "/features" },
  { name: "Prototype", href: "/prototype" },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-6 max-w-7xl">
        <Link href="/" className="flex items-center group">
          <Image
            src="/swastai-logo.png"
            alt="SwastAI Logo"
            width={140}
            height={40}
            className="h-10 w-auto group-hover:scale-105 transition-transform duration-300"
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-105 relative",
                pathname === item.href ? "text-primary" : "text-muted-foreground",
              )}
            >
              {item.name}
              {pathname === item.href && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        <Button
          asChild
          className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 hover:scale-105"
        >
          <Link href="/prototype">Try Prototype</Link>
        </Button>
      </div>
    </header>
  )
}
