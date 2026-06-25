import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHeader } from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact - Send Product Photo Specification and Quantity",
  description:
    "Contact SolTorque Energy Co., Ltd. for solar mounting hardware and PV accessories. Send product photo, specification, quantity and application scenario."
};

const inquiryItems = [
  "Product photo or drawing",
  "Specification or size reference",
  "Quantity and target use",
  "Application scenario, such as roof type, cable routing or grounding need",
  "Destination market or project requirement if available"
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Send product photo, specification and quantity for checking."
        description="For faster matching, please send product photo, specification, quantity and application scenario."
      />
      <section className="section-y bg-white">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_0.85fr]">
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-navy">Inquiry note</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Please send product photo, specification, quantity and application
              scenario. Suitable options can be checked according to project
              needs.
            </p>
            <ul className="mt-6 grid gap-3 text-sm text-slate-700">
              {inquiryItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
            <p className="eyebrow">Get in touch</p>
            <h2 className="mt-3 text-2xl font-bold text-navy">{site.name}</h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Solar mounting hardware supplier and PV accessories supplier
              support for overseas B2B customers.
            </p>
            <div className="mt-8 grid gap-3">
              <ButtonLink href={site.whatsappUrl}>WhatsApp</ButtonLink>
              <ButtonLink
                href={`mailto:${site.email}?subject=Solar%20mounting%20hardware%20inquiry&body=Hello%20SolTorque%20Energy%2C%0A%0AI%20would%20like%20to%20check%20the%20following%20product.%0A%0AProduct%20photo%3A%0ASpecification%3A%0AQuantity%3A%0AApplication%20scenario%3A%0A`}
                variant="secondary"
              >
                Email
              </ButtonLink>
            </div>
            <div className="mt-8 border-t border-slate-200 pt-6">
              <p className="text-sm font-semibold text-navy">Current email setting</p>
              <p className="mt-2 text-sm text-slate-600">{site.email}</p>
              <p className="mt-4 text-xs leading-5 text-slate-500">
                Replace the email and WhatsApp URL in lib/site.ts when the final
                contact details are confirmed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
