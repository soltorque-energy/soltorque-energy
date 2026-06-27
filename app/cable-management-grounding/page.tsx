import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/CtaBand";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Solar Cable Clip and Grounding Accessories Supplier",
  description:
    "Cable clips, cable management parts, grounding lugs, grounding clip washers, grounding copper braid and earthing accessories from SolTorque Energy Co., Ltd."
};

const products = [
  "Cable clips / cable management parts",
  "Special frame cable clips",
  "90-degree PV cable clips",
  "Tie clip for multiple PV cables",
  "Stainless steel cable tie for PV",
  "Grounding / earthing accessories",
  "Grounding clip washer",
  "Grounding lug",
  "PV grounding copper braid"
];

export default function CableManagementGroundingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Solar cable clip supplier"
        title="Cable Management & Grounding"
        description="PV cable routing and grounding / earthing accessories for clean installation and project-use matching."
      />
      <section className="section-y bg-white">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="text-2xl font-bold text-navy">
              Cable management and grounding accessories in one inquiry range
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              This page supports solar cable clip supplier and grounding
              accessories supplier inquiries. Please send product photo,
              specification and quantity when checking an item.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {products.map((product) => (
                <div key={product} className="rounded-md border border-slate-200 bg-slate-50 p-4 text-sm font-medium text-slate-700">
                  {product}
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Image src="/images/products/pv-cable-clips.jpg" alt="PV cable clips and cable management parts" width={975} height={575} className="rounded-lg border border-slate-200 bg-white object-cover" />
            <Image src="/images/products/stainless-steel-cable-ties.jpg" alt="Stainless steel cable tie for PV cable management" width={455} height={470} className="rounded-lg border border-slate-200 bg-white object-cover" />
            <Image src="/images/products/grounding-lug.jpg" alt="PV grounding lug for solar mounting projects" width={315} height={285} className="rounded-lg border border-slate-200 bg-white object-cover" />
            <Image src="/images/products/grounding-copper-braid.jpg" alt="PV grounding copper braid for earthing accessories" width={980} height={605} className="rounded-lg border border-slate-200 bg-white object-cover" />
          </div>
        </div>
      </section>
      <CtaBand
        whatsappMessage="Hi, I am interested in solar cable management and grounding accessories."
        buttonLocation="cable_management_grounding_cta_band"
      />
    </>
  );
}
