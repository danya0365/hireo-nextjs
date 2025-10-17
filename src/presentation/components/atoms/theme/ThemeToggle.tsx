"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { cn } from "@/src/utils/cn";

const toggleOptions = [
  { id: "light", label: "โหมดสว่าง", icon: Sun },
  { id: "dark", label: "โหมดมืด", icon: Moon },
  { id: "system", label: "ตามระบบ", icon: Monitor }
] as const;

export function ThemeToggle({ className }: { className?: string }) {
  const { setTheme, theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={cn(
          "flex items-center rounded-full border border-border/60 bg-card px-1 py-1 text-sm",
          className
        )}
        aria-hidden="true"
      >
        <div className="flex items-center gap-1 text-muted-foreground">
          <Sun className="h-4 w-4" />
          <span className="hidden sm:inline">ธีม</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex items-center rounded-full border border-border/60 bg-card px-1 py-1 text-xs font-medium text-muted-foreground shadow-sm",
        className
      )}
      role="radiogroup"
      aria-label="สลับธีม"
    >
      {toggleOptions.map((option) => {
        const Icon = option.icon;
        const isActive = (theme ?? resolvedTheme) === option.id;

        return (
          <button
            key={option.id}
            type="button"
            role="radio"
            aria-checked={isActive}
            onClick={() => setTheme(option.id)}
            className={cn(
              "flex items-center gap-1 rounded-full px-3 py-1 transition-all",
              isActive
                ? "bg-primary text-primary-foreground shadow-sm"
                : "hover:bg-muted hover:text-foreground"
            )}
          >
            <Icon className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}
