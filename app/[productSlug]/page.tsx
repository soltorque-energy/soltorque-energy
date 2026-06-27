import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { DownloadLink } from "@/components/DownloadLink";
import { downloads } from "@/lib/products";
import {
  defaultFaqs,
  getRelatedSeoPages,
  getSeoProductPage,
  getSeoProductWhatsAppMessage,
  seoProductPages
} from "@/lib/seo-products";
import { createWhatsAppUrl, site } from "@/lib/site";

type ProductSeoPageProps = {
  params: Promise<{
    productSlug: string;
  }>;
};

export function generateStaticParams() {
  return seoProductPages.map((page) => ({
    productSlug: page.slug
  }));
}

export async function generateMetadata({ params }: ProductSeoPageProps): Promise<Metadata> {
  const { productSlug } = await params;
  const page = getSeoProductPage(productSlug);

  if (!page) {
    return {};
  }

  return {
    title: {
      absolute: page.seoTitle
    },
    description: page.metaDescription,
    alternates: {
      canonical: `${site.url}/${page.slug}`
    },
    openGraph: {
      title: page.seoTitle,
      description: page.metaDescription,
      url: `${site.url}/${page.slug}`,
      images: [
        {
          url: page.image,
          alt: page.alt
        }
      ]
    }
  };
}

function DetailSection({
  title,
  items
}: {
  title: string;
  items: string[];
}) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
      <h2 className="text-xl font-bold text-navy">{title}</h2>
      <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-700">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-solar" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default async function ProductSeoPage({ params }: ProductSeoPageProps) {
  const { productSlug } = await params;
  const page = getSeoProductPage(productSlug);

  if (!page) {
    notFound();
  }

  const fullCatalog = downloads.find((download) => download.title === "Full Catalog") ?? downloads[0];
  const faqs = page.faqs ?? defaultFaqs;
  const relatedPages = getRelatedSeoPages(page);
  const whatsappMessage = getSeoProductWhatsAppMessage(page);
  const whatsappUrl = createWhatsAppUrl(whatsappMessage);
  const recommendedProducts = page.recommendedProducts ?? [
    page.title,
    "Related mounting hardware",
    "Matched fasteners",
    "Cable management and grounding accessories"
  ];
  const commonProducts = page.commonProducts ?? [
    "Solar mounting rails",
    "Mid clamps",
    "End clamps",
    "Roof clamps / brackets",
    "T bolts / nuts / fasteners",
    "MC4 connectors",
    "Cable clips / cable management parts",
    "Grounding / earthing accessories",
    "GI slotted channel / strut channel"
  ];
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="border-b border-slate-200 bg-white">
        <div className="container-x grid gap-10 py-12 sm:py-16 lg:grid-cols-[1fr_420px] lg:items-center">
          <div>
            <p className="eyebrow">{page.keyword}</p>
            <h1 className="mt-3 max-w-4xl text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              {page.h1}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
              {page.intro}
            </p>
            <p className="mt-5 max-w-3xl text-sm leading-6 text-slate-600">
              SolTorque Energy Co., Ltd. supports overseas customers with project-use solar
              mounting hardware and related PV accessories from China-side supply resources.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink
                href={whatsappUrl}
                eventName="whatsapp_click"
                eventParams={{
                  button_location: page.slug,
                  link_url: whatsappUrl,
                  product_page: page.slug,
                  whatsapp_message: whatsappMessage
                }}
              >
                WhatsApp
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Contact Page
              </ButtonLink>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-slate-200 bg-slate-100 shadow-soft">
            <Image
              src={page.image}
              alt={page.alt}
              width={900}
              height={675}
              className="aspect-[4/3] w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="section-y bg-slate-50">
        <div className="container-x grid gap-6 lg:grid-cols-2">
          <DetailSection title="Recommended product range" items={recommendedProducts} />
          <DetailSection title="Common products" items={commonProducts} />
          <DetailSection title="Application scenarios" items={page.applications} />
          <DetailSection title="Common specifications" items={page.specifications} />
          <DetailSection title="Materials / surface treatment" items={page.materials} />
          <DetailSection title="Information needed before quotation" items={page.quoteInfo} />
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-x grid gap-8 lg:grid-cols-[1fr_360px] lg:items-start">
          <div>
            <p className="eyebrow">Suitable customers</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy">
              Built for B2B inquiry and project matching
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
              This page is prepared for overseas buyers who need clear product matching before
              quotation. Suitable options can be checked according to project needs, product
              photos, specifications and quantity.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {page.customerTypes.map((type) => (
                <span
                  key={type}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>

          <aside className="rounded-lg border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-bold text-navy">PDF catalog</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Download the full catalog to check detailed product pictures and specification
              references.
            </p>
            <DownloadLink
              href={fullCatalog.href}
              fileLabel={fullCatalog.fileLabel}
              title={`${page.title} - ${fullCatalog.title}`}
            />
          </aside>
        </div>
      </section>

      <section className="section-y bg-slate-50">
        <div className="container-x">
          <p className="eyebrow">Related pages</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy">
            Related product and project pages
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
            Continue checking related solar mounting hardware and PV accessories before
            sending an inquiry.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {relatedPages.map((relatedPage) => (
              <Link
                key={relatedPage.slug}
                href={`/${relatedPage.slug}`}
                className="rounded-lg border border-slate-200 bg-white p-5 transition hover:border-solar hover:shadow-soft"
              >
                <h3 className="text-base font-bold text-navy">{relatedPage.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {relatedPage.metaDescription}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-x">
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy">
            Common questions before inquiry
          </h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-lg border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-base font-bold text-navy">{faq.question}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy">
        <div className="container-x grid gap-6 py-10 text-white lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="eyebrow text-sky-200">Inquiry support</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
              Send product photo, specification and quantity for checking.
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-200">
              Please send product photo, specification, quantity and application scenario.
            </p>
            <div className="mt-5 flex flex-wrap gap-4 text-sm">
              <Link href="/product-range" className="font-semibold text-white underline underline-offset-4">
                Back to Product Range
              </Link>
              <Link href="/contact" className="font-semibold text-white underline underline-offset-4">
                Contact SolTorque Energy
              </Link>
            </div>
          </div>
          <ButtonLink
            href={whatsappUrl}
            variant="light"
            eventName="whatsapp_click"
            eventParams={{
              button_location: `${page.slug}_bottom_cta`,
              link_url: whatsappUrl,
              product_page: page.slug,
              whatsapp_message: whatsappMessage
            }}
          >
            WhatsApp
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
