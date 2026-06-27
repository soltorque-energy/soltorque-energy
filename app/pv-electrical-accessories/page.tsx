import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/CtaBand";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "PV Electrical Accessories and MC4 Connector Supplier",
  description:
    "MC4 connectors, MC4 connector tools, DC isolator brackets and related PV electrical accessories for B2B project matching."
};

const products = [
  "MC4 connectors",
  "MC4 PV connector spanner",
  "DC isolator bracket",
  "Related PV electrical accessories",
  "Product matching by photo and specification"
];

export default function PvElectricalAccessoriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="PV accessories supplier"
        title="PV Electrical Accessories"
        description="MC4 connector supplier support and related PV electrical accessories for overseas customers who need practical product matching."
      />
      <section className="section-y bg-white">
        <div className="container-x grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-center">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <Image
              src="/images/products/mc4-connector-spanner.jpg"
              alt="MC4 PV connector spanner for solar installation"
              width={405}
              height={600}
              className="rounded-lg border border-slate-200 bg-white object-cover"
            />
            <Image
              src="/images/products/metal-roof-mounting-system.jpg"
              alt="PV mounting system reference for related electrical accessory inquiries"
              width={968}
              height={365}
              className="rounded-lg border border-slate-200 bg-white object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-navy">
              Electrical accessory inquiries are checked by product details
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              For MC4 connectors and related PV electrical accessories, please
              send a clear product photo, specification, quantity and application
              scenario. Suitable options can be checked according to project
              needs.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {products.map((product) => (
                <div key={product} className="rounded-md border border-slate-200 bg-slate-50 p-4 text-sm font-medium text-slate-700">
                  {product}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CtaBand
        whatsappMessage="Hi, I am interested in MC4 connectors and PV electrical accessories."
        buttonLocation="pv_electrical_accessories_cta_band"
      />
    </>
  );
}
