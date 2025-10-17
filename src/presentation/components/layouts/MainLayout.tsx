"use client";

import { ReactNode } from "react";

import { MainFooter } from "@/src/presentation/components/organisms/footer/MainFooter";
import { MainHeader } from "@/src/presentation/components/organisms/header/MainHeader";
import { cn } from "@/src/utils/cn";

interface MainLayoutProps {
  children: ReactNode;
  className?: string;
}

export function MainLayout({ children, className }: MainLayoutProps) {
  return (
    <div className="relative flex min-h-dvh flex-col overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-12%] size-[560px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(59,130,246,0.18),_transparent_72%)] blur-3xl" />
        <div className="absolute bottom-[-25%] right-[10%] size-[520px] rounded-full bg-[radial-gradient(circle,_rgba(14,165,233,0.14),_transparent_75%)] blur-3xl" />
      </div>

      <MainHeader />
      <main className={cn("relative flex-1", className)}>
        <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-12 sm:px-6 lg:px-10 xl:max-w-[1100px] xl:px-0">{children}</div>
      </main>
      <MainFooter />
    </div>
  );
}
