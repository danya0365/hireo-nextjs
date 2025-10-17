"use client";

import { Menu, Search, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { primaryNavigation, secondaryNavigation } from "@/src/domain/config/navigation";
import { cn } from "@/src/utils/cn";
import { ThemeToggle } from "@/src/presentation/components/atoms/theme/ThemeToggle";

export function MainHeader() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (href: string) => (href === "/" ? pathname === href : pathname.startsWith(href));

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur border-b border-border/40 bg-background/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2" onClick={closeMobileMenu}>
            <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
              Hireo
            </span>
            <span className="hidden text-sm font-medium text-muted-foreground sm:inline">
              แพลตฟอร์มรวมฟรีแลนซ์ระดับโลก
            </span>
          </Link>
          <nav className="hidden items-center gap-1 lg:flex">
            {primaryNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  isActive(item.href)
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <button className="flex items-center gap-2 rounded-full border border-border/60 px-4 py-2 text-sm font-medium text-muted-foreground transition hover:border-border hover:text-foreground">
            <Search className="h-4 w-4" />
            ค้นหาฟรีแลนซ์
          </button>
          <Link
            href="/auth/login"
            className="flex items-center gap-2 rounded-full border border-primary/40 px-4 py-2 text-sm font-semibold text-primary transition hover:border-primary hover:bg-primary/10"
          >
            <User className="h-4 w-4" />
            เข้าสู่ระบบ
          </Link>
          <Link
            href="/hire"
            className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
          >
            เริ่มจ้างงาน
          </Link>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-border/60 p-2 text-muted-foreground transition hover:border-border hover:text-foreground"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="เปิดเมนู"
            aria-expanded={isMobileMenuOpen}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {isMobileMenuOpen ? (
        <div className="border-t border-border/60 bg-background px-4 py-4 sm:px-6 lg:hidden">
          <nav className="flex flex-col gap-2">
            {[...primaryNavigation, ...secondaryNavigation].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  isActive(item.href)
                    ? "bg-primary/10 text-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
                onClick={closeMobileMenu}
              >
                <div className="flex flex-col">
                  <span>{item.label}</span>
                  {item.description ? (
                    <span className="text-xs text-muted-foreground/80">{item.description}</span>
                  ) : null}
                </div>
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2">
            <Link
              href="/auth/login"
              className="flex items-center justify-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-semibold text-foreground"
              onClick={closeMobileMenu}
            >
              <User className="h-4 w-4" />
              เข้าสู่ระบบ
            </Link>
            <Link
              href="/hire"
              className="flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
              onClick={closeMobileMenu}
            >
              เริ่มจ้างงาน
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
