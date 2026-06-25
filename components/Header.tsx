"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="container-x flex min-h-16 items-center justify-between gap-4">
        <Link href="/" className="flex flex-col leading-tight" onClick={() => setOpen(false)}>
          <span className="text-lg font-bold tracking-tight text-navy">{site.shortName}</span>
          <span className="hidden text-xs text-slate-500 sm:block">
            Solar mounting hardware & PV accessories
          </span>
        </Link>

        <button
          type="button"
          className="rounded-md border border-slate-300 px-3 py-2 text-sm font-semibold text-navy lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          Menu
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-slate-100 text-navy"
                    : "text-slate-600 hover:bg-slate-50 hover:text-navy"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>

      {open ? (
        <div id="mobile-navigation" className="border-t border-slate-200 bg-white lg:hidden">
          <div className="container-x grid gap-1 py-3">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-md px-3 py-3 text-sm font-medium ${
                    active ? "bg-slate-100 text-navy" : "text-slate-700"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}
    </header>
  );
}
