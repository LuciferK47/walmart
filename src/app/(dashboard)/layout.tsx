import Link from "next/link"
import {
  Bell,
  Home,
  LineChart,
  Package,
  Package2,
  ShoppingCart,
  Users,
  Search,
  Shield,
  Bot,
  Fingerprint
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { QuantumSentinelIcon } from "@/components/icons"
import { ThemeToggle } from "@/components/theme-toggle"
import { NavLink } from "@/components/nav-link"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-card/80 backdrop-blur-sm md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <QuantumSentinelIcon className="h-8 w-8 text-primary" />
              <span className="font-headline text-xl">Quantum Sentinel</span>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <NavLink href="/">
                <Home className="h-4 w-4" />
                Dashboard
              </NavLink>
              <NavLink href="/threat-intelligence">
                <Bot className="h-4 w-4" />
                Threat Intelligence
              </NavLink>
              <NavLink href="/supply-chain">
                <Shield className="h-4 w-4" />
                Supply Chain
                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  3
                </Badge>
              </NavLink>
              <NavLink href="/access-control">
                <Fingerprint className="h-4 w-4" />
                Access Control
              </NavLink>
              <NavLink href="/analytics">
                <LineChart className="h-4 w-4" />
                Analytics
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-card/80 px-4 backdrop-blur-sm sticky top-0 z-10 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Package2 className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  href="#"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <QuantumSentinelIcon className="h-8 w-8 text-primary" />
                  <span className="font-headline">Quantum Sentinel</span>
                </Link>
                <NavLink href="/" isMobile>
                  <Home className="h-5 w-5" />
                  Dashboard
                </NavLink>
                <NavLink href="/threat-intelligence" isMobile>
                  <Bot className="h-5 w-5" />
                  Threat Intelligence
                </NavLink>
                <NavLink href="/supply-chain" isMobile>
                  <Shield className="h-5 w-5" />
                  Supply Chain
                </NavLink>
                <NavLink href="/access-control" isMobile>
                  <Fingerprint className="h-5 w-5" />
                  Access Control
                </NavLink>
                <NavLink href="/analytics" isMobile>
                  <LineChart className="h-5 w-5" />
                  Analytics
                </NavLink>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search system events, users, or assets..."
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                />
              </div>
            </form>
          </div>
          <ThemeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <img
                  src="https://placehold.co/36x36.png"
                  width={36}
                  height={36}
                  alt="Avatar"
                  className="overflow-hidden rounded-full"
                  data-ai-hint="profile picture"
                />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Analyst Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="text-sm text-muted-foreground hidden lg:block">Authenticated via Biometrics</div>
        </header>
        {children}
      </div>
    </div>
  )
}
