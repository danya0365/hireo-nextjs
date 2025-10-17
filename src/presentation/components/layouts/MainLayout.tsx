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
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <MainHeader />
      <main className={cn("flex-1", className)}>
        <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">{children}</div>
      </main>
      <MainFooter />
    </div>
  );
}
