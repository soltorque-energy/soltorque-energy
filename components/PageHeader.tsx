type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="container-x py-12 sm:py-16">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1 className="mt-3 max-w-4xl text-3xl font-bold tracking-tight text-navy sm:text-4xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
