"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface NavLinkProps {
  href: string
  children: React.ReactNode
  isMobile?: boolean
}

export function NavLink({ href, children, isMobile = false }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  const desktopClasses = "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
  const mobileClasses = "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
  const activeDesktopClasses = "bg-muted text-primary"
  const activeMobileClasses = "bg-muted text-foreground"

  return (
    <Link
      href={href}
      className={cn(
        isMobile ? mobileClasses : desktopClasses,
        isActive && (isMobile ? activeMobileClasses : activeDesktopClasses)
      )}
    >
      {children}
    </Link>
  )
}
