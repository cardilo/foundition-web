"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button
        className={`w-9 h-9 rounded-md border border-border ${className}`}
        aria-label="Toggle theme"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`w-9 h-9 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors ${className}`}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  );
}

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useI18n();
  return (
    <div
      className={`flex items-center text-xs font-medium rounded-md border border-border overflow-hidden ${className}`}
    >
      <button
        onClick={() => setLocale("en")}
        className={`px-2.5 py-1.5 transition-colors ${
          locale === "en"
            ? "bg-foreground text-background"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="English"
      >
        EN
      </button>
      <button
        onClick={() => setLocale("fr")}
        className={`px-2.5 py-1.5 transition-colors ${
          locale === "fr"
            ? "bg-foreground text-background"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="Français"
      >
        FR
      </button>
    </div>
  );
}
