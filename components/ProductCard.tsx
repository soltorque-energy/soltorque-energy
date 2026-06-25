import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  title: string;
  summary: string;
  image: string;
  alt: string;
  href?: string;
  products?: string[];
};

export function ProductCard({
  title,
  summary,
  image,
  alt,
  href,
  products = []
}: ProductCardProps) {
  const content = (
    <article className="h-full overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg">
      <div className="relative aspect-[4/3] bg-slate-100">
        <Image src={image} alt={alt} fill className="object-cover" sizes="(min-width: 1024px) 33vw, 100vw" />
      </div>
      <div className="p-6">
        <h2 className="text-xl font-bold text-navy">{title}</h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">{summary}</p>
        {products.length > 0 ? (
          <ul className="mt-5 grid gap-2 text-sm text-slate-700">
            {products.slice(0, 5).map((product) => (
              <li key={product} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-solar" />
                <span>{product}</span>
              </li>
            ))}
          </ul>
        ) : null}
        {href ? <p className="mt-5 text-sm font-semibold text-solar">View range</p> : null}
      </div>
    </article>
  );

  return href ? <Link href={href}>{content}</Link> : content;
}
