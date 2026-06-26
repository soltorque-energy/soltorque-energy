import { ButtonLink } from "@/components/ButtonLink";
import { site } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="bg-navy">
      <div className="container-x grid gap-6 py-10 text-white lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="eyebrow text-sky-200">Inquiry support</p>
          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
            Send product photo, specification and quantity for checking.
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-200">
            {site.inquiryNote} Suitable options can be checked according to project needs.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink
            href={site.whatsappUrl}
            variant="light"
            eventName="whatsapp_click"
            eventParams={{
              button_location: "cta_band",
              link_url: site.whatsappUrl
            }}
          >
            WhatsApp
          </ButtonLink>
          <ButtonLink
            href={`mailto:${site.email}?subject=Solar%20mounting%20hardware%20inquiry`}
            variant="secondary"
            className="border-white/40 bg-transparent text-white hover:bg-white/10"
          >
            Email
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
