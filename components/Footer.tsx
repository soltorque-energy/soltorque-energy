import Link from "next/link";
import { navItems, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-x grid gap-8 py-10 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="text-lg font-bold text-navy">{site.name}</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">
            Solar mounting hardware and related PV accessories from China-side
            supply resources for overseas B2B customers.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-navy">Pages</p>
          <div className="mt-3 grid gap-2">
            {navItems.slice(0, 4).map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-slate-600 hover:text-navy">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-navy">Inquiry Note</p>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Send product photo, specification and quantity for checking.
          </p>
        </div>
      </div>
      <div className="border-t border-slate-200 py-5">
        <div className="container-x text-xs text-slate-500">
          © {new Date().getFullYear()} {site.name}. B2B information site.
        </div>
      </div>
    </footer>
  );
}
