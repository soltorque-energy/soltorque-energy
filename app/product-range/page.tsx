import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/CtaBand";
import { PageHeader } from "@/components/PageHeader";
import { productCategories, productRange } from "@/lib/products";
import { seoProductPages } from "@/lib/seo-products";

export const metadata: Metadata = {
  title: "Product Range - Solar Mounting Hardware and PV Accessories",
  description:
    "View SolTorque Energy product range including solar mounting rails, mid clamps, end clamps, roof brackets, MC4 connectors, cable clips and grounding accessories."
};

export default function ProductRangePage() {
  return (
    <>
      <PageHeader
        eyebrow="Product range"
        title="Solar mounting hardware and related PV accessories"
        description="A practical overview for overseas B2B customers who need to check project-use solar mounting hardware, PV electrical accessories, cable management and grounding parts."
      />
      <section className="section-y bg-white">
        <div className="container-x grid gap-6">
          {productRange.map((item) => (
            <article
              key={item.group}
              className="grid overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft lg:grid-cols-[360px_1fr]"
            >
              <div className="relative min-h-64 bg-slate-100">
                <Image src={item.image} alt={item.alt} fill className="object-cover" sizes="(min-width: 1024px) 360px, 100vw" />
              </div>
              <div className="p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-navy">{item.group}</h2>
                <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-y bg-slate-50">
        <div className="container-x">
          <p className="eyebrow">Main pages</p>
          <h2 className="mt-3 text-3xl font-bold text-navy">Detailed product categories</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {productCategories.map((category) => (
              <div key={category.slug} className="rounded-lg border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-bold text-navy">{category.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{category.summary}</p>
                <ul className="mt-5 grid gap-2 text-sm text-slate-700">
                  {category.products.map((product) => (
                    <li key={product}>- {product}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-x">
          <p className="eyebrow">Product inquiry pages</p>
          <h2 className="mt-3 text-3xl font-bold text-navy">
            Specific product pages for Google search and B2B inquiry
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
            These pages help buyers check common product types before sending photos,
            specifications and quantity for matching.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {seoProductPages.map((page) => (
              <a
                key={page.slug}
                href={`/${page.slug}`}
                className="rounded-lg border border-slate-200 bg-slate-50 p-5 transition hover:border-solar hover:bg-white hover:shadow-soft"
              >
                <h3 className="text-lg font-bold text-navy">{page.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{page.metaDescription}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
