import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/CtaBand";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Solar Mounting Hardware Supplier",
  description:
    "Solar mounting rails, mid clamps, end clamps, roof clamps, brackets, T bolts, nuts, fasteners and GI slotted channel from SolTorque Energy Co., Ltd."
};

const products = [
  "Solar mounting rails",
  "Mid clamps",
  "End clamps",
  "Thin-film mid clamps and end clamps",
  "Roof clamps / brackets",
  "Residential roof stainless steel hooks",
  "Metal roof brackets and clamps",
  "T bolts / nuts / fasteners",
  "GI slotted channel / strut channel",
  "Waterproof rubber parts and flashing"
];

export default function SolarMountingHardwarePage() {
  return (
    <>
      <PageHeader
        eyebrow="Solar mounting hardware supplier"
        title="Solar Mounting Hardware"
        description="Project-use mounting hardware for residential roof, commercial metal roof and related PV installation needs."
      />
      <section className="section-y bg-white">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div>
            <h2 className="text-2xl font-bold text-navy">
              Rails, clamps, brackets and structural hardware for PV projects
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              This range covers solar mounting rail supplier needs, solar mid
              clamp supplier inquiries, solar end clamp supplier inquiries and
              roof bracket matching for common PV installation scenarios.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {products.map((product) => (
                <div key={product} className="rounded-md border border-slate-200 bg-slate-50 p-4 text-sm font-medium text-slate-700">
                  {product}
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4">
            <Image
              src="/images/products/module-clamps.jpg"
              alt="Solar mid clamps end clamps and rail hardware"
              width={1000}
              height={375}
              className="rounded-lg border border-slate-200 bg-white object-cover"
            />
            <Image
              src="/images/products/metal-roof-clamps.jpg"
              alt="Metal roof clamps and brackets for PV mounting"
              width={968}
              height={305}
              className="rounded-lg border border-slate-200 bg-white object-cover"
            />
            <Image
              src="/images/products/residential-roof-hooks.jpg"
              alt="Residential roof stainless steel hooks for solar mounting"
              width={1573}
              height={330}
              className="rounded-lg border border-slate-200 bg-white object-cover"
            />
          </div>
        </div>
      </section>
      <CtaBand
        whatsappMessage="Hi, I am interested in solar mounting hardware."
        buttonLocation="solar_mounting_hardware_cta_band"
      />
    </>
  );
}
