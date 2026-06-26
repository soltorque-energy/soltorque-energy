import type { Metadata } from "next";
import { Analytics } from "@/components/Analytics";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { seoKeywords, site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.shortName} | Solar Mounting Hardware Supplier`,
    template: `%s | ${site.shortName}`
  },
  description: site.description,
  keywords: seoKeywords,
 openGraph: {
  title: `${site.shortName} | Solar Mounting Hardware Supplier`,
  description: site.description,
  url: site.url,
  siteName: site.shortName,
  type: "website"
},
verification: {
  google: "NUkdmHDv--Hn-q44KFgA4qISK-Cmkp-19T9jcEUMDP8"
}
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <Analytics />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
