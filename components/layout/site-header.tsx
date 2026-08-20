"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { AdmissionCta } from "@/components/ui/admission-cta";
import { NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

import { SiteLogo } from "./site-logo";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[100] border-b border-primary/10 bg-white pt-[env(safe-area-inset-top)] shadow-soft">
        <div className="container-site">
          <div className="relative flex h-16 items-center justify-between gap-3 sm:h-[4.75rem] lg:h-[5.5rem]">
            <div
              className="pointer-events-none absolute inset-y-0 -left-5 -right-5 bg-gradient-to-r from-white from-[5%] via-brand-sky/15 via-[28%] via-brand-yellow/25 via-[50%] via-brand-green/15 via-[72%] to-white to-[95%] lg:-left-6 lg:-right-6"
              aria-hidden="true"
            />

            <Link
              href="/"
              className="relative z-10 flex min-w-0 flex-1 items-center overflow-hidden pr-2"
              onClick={() => setMenuOpen(false)}
            >
              <SiteLogo priority className="h-10 max-h-10 w-auto max-w-full sm:h-14 sm:max-h-14 lg:h-[4.25rem] lg:max-h-[4.25rem]" />
            </Link>

            <nav
              className="relative z-10 hidden shrink-0 items-center gap-0.5 lg:flex"
              aria-label="Main navigation"
            >
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-lg px-3 py-2 font-display text-base font-semibold transition-colors",
                    "highlight" in item && item.highlight
                      ? "nav-highlight-pulse text-primary hover:text-primary"
                      : "text-foreground hover:bg-white/60 hover:text-primary",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="relative z-10 hidden shrink-0 lg:block">
              <AdmissionCta size="md" />
            </div>

            <button
              type="button"
              className="relative z-10 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-white text-primary shadow-soft lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? (
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.25"
                  aria-hidden="true"
                >
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              ) : (
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.25"
                  aria-hidden="true"
                >
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <nav
          id="mobile-nav"
          className={cn(
            "border-t border-primary/10 bg-white lg:hidden",
            menuOpen
              ? "max-h-[min(70vh,28rem)] overflow-y-auto pb-[env(safe-area-inset-bottom)]"
              : "hidden",
          )}
          aria-label="Mobile navigation"
        >
          <div className="container-site flex flex-col gap-1 py-3 text-center">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-lg px-3 py-2.5 font-display text-base font-semibold transition-colors",
                  "highlight" in item && item.highlight
                    ? "nav-highlight-pulse text-primary hover:text-primary"
                    : "text-foreground hover:bg-primary/5 hover:text-primary",
                )}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex justify-center px-3 pb-2">
              <AdmissionCta size="sm" />
            </div>
          </div>
        </nav>
      </header>
      <div
        className="h-[calc(4rem+env(safe-area-inset-top))] sm:h-[calc(4.75rem+env(safe-area-inset-top))] lg:h-[calc(5.5rem+env(safe-area-inset-top))]"
        aria-hidden="true"
      />
    </>
  );
}
