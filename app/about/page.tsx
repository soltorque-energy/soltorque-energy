import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/CtaBand";
import { PageHeader } from "@/components/PageHeader";
import { capabilityPoints } from "@/lib/products";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About and Capability",
  description:
    "Learn about SolTorque Energy Co., Ltd. and its B2B supply support for solar mounting hardware and related PV accessories from China-side supply resources."
};

const materialPoints = [
  "AL6005-T5 aluminum alloy parts",
  "SUS304 / SUS316 stainless steel hardware",
  "EPDM rubber parts for waterproofing and protection",
  "Anodized aluminum surface treatment references",
  "Project-use matching based on product photo and specification"
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About / Capability"
        title={site.name}
        description="A B2B information site for overseas customers who need solar mounting hardware and related PV accessories from China-side supply resources."
      />
      <section className="section-y bg-white">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <h2 className="text-2xl font-bold text-navy">
              Practical supply support for project-use PV mounting parts
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              SolTorque Energy Co., Ltd. focuses on solar mounting hardware and
              related PV accessories. The website is built for B2B trust and
              inquiry conversion, helping customers quickly confirm whether the
              required product range can be checked.
            </p>
            <ul className="mt-6 grid gap-3 text-sm text-slate-700">
              {capabilityPoints.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-solar" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <Image
            src="/images/products/anodizing-workshop.jpg"
            alt="Anodizing surface treatment workshop for PV aluminum parts"
            width={968}
            height={1140}
            className="rounded-lg border border-slate-200 bg-white object-cover shadow-soft"
          />
        </div>
      </section>
      <section className="section-y bg-slate-50">
        <div className="container-x">
          <p className="eyebrow">Materials and matching</p>
          <h2 className="mt-3 text-3xl font-bold text-navy">Common material references</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {materialPoints.map((point) => (
              <div key={point} className="rounded-lg border border-slate-200 bg-white p-5 text-sm font-medium leading-6 text-slate-700">
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
