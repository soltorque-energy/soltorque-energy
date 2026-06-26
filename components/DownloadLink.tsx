"use client";

import { trackEvent } from "@/components/Analytics";

type DownloadLinkProps = {
  href: string;
  fileLabel: string;
  title: string;
};

export function DownloadLink({ href, fileLabel, title }: DownloadLinkProps) {
  return (
    <a
      href={href}
      download
      onClick={() =>
        trackEvent("pdf_download", {
          file_name: fileLabel,
          link_url: href,
          item_name: title
        })
      }
      className="mt-6 inline-flex rounded-md bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#123a68]"
    >
      Download PDF
    </a>
  );
}
