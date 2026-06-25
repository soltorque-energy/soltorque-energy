import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { CtaBand } from "@/components/CtaBand";
import { ProductCard } from "@/components/ProductCard";
import { capabilityPoints, productCategories, productRange } from "@/lib/products";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Solar Mounting Hardware and PV Accessories Supplier",
  description:
    "SolTorque Energy Co., Ltd. supports overseas B2B customers with project-use solar mounting hardware and related PV accessories from China-side supply resources."
};

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy text-white">
        <Image
          src="/images/products/roof-mounting-scene.jpg"
          alt="Residential roof solar mounting hardware installation scene"
          fill
          priority
          className="object-cover opacity-35"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/35" />
        <div className="container-x relative py-20 sm:py-24 lg:py-32">
          <p className="eyebrow text-sky-200">Solar mounting hardware supplier</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Project-use solar mounting hardware and related PV accessories.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-100">
            {site.name} supports overseas customers with project-use solar mounting
            hardware and related PV accessories from China-side supply resources.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/product-range" variant="light">View Product Range</ButtonLink>
            <ButtonLink
              href="/contact"
              variant="secondary"
              className="border-white/50 bg-transparent text-white hover:bg-white/10"
            >
              Send Inquiry
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-x">
          <div className="max-w-3xl">
            <p className="eyebrow">Main range</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy">
              Product categories for B2B project matching
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              The first version focuses on clear product understanding, inquiry
              conversion and trust building. It is not an online store.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((category) => (
              <ProductCard
                key={category.slug}
                title={category.title}
                summary={category.summary}
                image={category.image}
                alt={category.alt}
                href={category.slug}
                products={category.products}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-slate-50">
        <div className="container-x grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="eyebrow">Capability</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy">
              Support for product matching by photo, specification and quantity
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              SolTorque Energy Co., Ltd. helps overseas customers check suitable
              options for solar mounting rails, clamps, brackets, fasteners,
              cable clips, grounding accessories, MC4 connectors and related PV
              accessories.
            </p>
            <ul className="mt-6 grid gap-3 text-sm text-slate-700">
              {capabilityPoints.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {productRange.slice(0, 4).map((item) => (
              <div key={item.group} className="overflow-hidden rounded-lg border border-slate-200 bg-white">
                <div className="relative aspect-[4/3] bg-slate-100">
                  <Image src={item.image} alt={item.alt} fill className="object-cover" sizes="(min-width: 1024px) 25vw, 50vw" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-navy">{item.group}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
