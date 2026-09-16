import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { products, getProductBySlug } from "@/lib/products";
import { formatPrice } from "@/lib/format";
import { AddToCartButton } from "@/components/AddToCartButton";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "محصول" };
  return {
    title: product.name,
    description: product.description,
    openGraph: { title: `${product.name} | ویژن`, description: product.description },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(decodeURIComponent(slug));
  if (!product) notFound();
  const unit = product.salePrice ?? product.price;

  return (
    <div className="mx-auto grid max-w-5xl gap-10 px-4 py-12 md:grid-cols-2">
      <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-full bg-neutral-100">
        <Image src={product.image} alt={product.name} fill className="object-cover" priority unoptimized />
      </div>
      <div>
        {product.discount ? (
          <span className="rounded-full bg-brand-green px-3 py-1 text-sm text-white">
            %{product.discount}
          </span>
        ) : null}
        <h1 className="mt-4 text-2xl font-bold text-brand-purple">{product.name}</h1>
        <p className="mt-4 text-sm leading-8 text-neutral-600">{product.description}</p>
        <div className="mt-6 flex items-end gap-3">
          {product.salePrice ? (
            <span className="text-neutral-400 line-through">{formatPrice(product.price)}</span>
          ) : null}
          <span className="text-2xl font-bold">
            {formatPrice(unit)} <span className="text-sm font-normal">تومان</span>
          </span>
        </div>
        <AddToCartButton product={product} />
      </div>
    </div>
  );
}
