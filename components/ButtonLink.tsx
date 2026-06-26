"use client";

import Link from "next/link";
import { trackEvent } from "@/components/Analytics";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "light";
  className?: string;
  eventName?: string;
  eventParams?: Record<string, unknown>;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  eventName,
  eventParams
}: ButtonLinkProps) {
  const base =
    "inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2";
  const styles = {
    primary:
      "bg-navy text-white hover:bg-[#123a68] focus:ring-navy shadow-sm",
    secondary:
      "border border-slate-300 bg-white text-navy hover:border-navy hover:bg-slate-50 focus:ring-navy",
    light:
      "bg-white text-navy hover:bg-slate-100 focus:ring-white"
  };

  return (
    <Link
      href={href}
      className={`${base} ${styles[variant]} ${className}`}
      onClick={() => {
        if (eventName) {
          trackEvent(eventName, eventParams);
        }
      }}
    >
      {children}
    </Link>
  );
}
