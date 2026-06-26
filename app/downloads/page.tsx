import type { Metadata } from "next";
import { DownloadLink } from "@/components/DownloadLink";
import { PageHeader } from "@/components/PageHeader";
import { downloads } from "@/lib/products";

export const metadata: Metadata = {
  title: "Downloads - Product Range and Catalog PDF",
  description:
    "Download the SolTorque Energy short product range PDF and full catalog PDF for solar mounting hardware and related PV accessories."
};

export default function DownloadsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Downloads"
        title="Product PDF downloads"
        description="Short Product Range is suitable for quickly understanding the product scope. Full Catalog is suitable for checking detailed product pictures and specification references."
      />
      <section className="section-y bg-white">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {downloads.map((download) => (
            <article key={download.href} className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
              <p className="eyebrow">PDF</p>
              <h2 className="mt-3 text-2xl font-bold text-navy">{download.title}</h2>
              <p className="mt-4 text-sm leading-6 text-slate-600">{download.description}</p>
              <p className="mt-4 text-xs text-slate-500">{download.fileLabel}</p>
              <DownloadLink
                href={download.href}
                fileLabel={download.fileLabel}
                title={download.title}
              />
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
