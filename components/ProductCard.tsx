"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/types";
import { formatPrice } from "@/lib/format";
import { useShop } from "@/lib/store";

export function ProductCard({ product }: { product: Product }) {
  const addItem = useShop((s) => s.addItem);
  const unit = product.salePrice ?? product.price;

  return (
    <article className="product-slider-wrapper group relative flex flex-col rounded-xl bg-[#f6f6f6] p-3 pb-3">
      {product.discount ? (
        <span className="absolute right-2 top-2 z-10 rounded-md bg-brand-green px-1.5 py-0.5 text-[11px] font-bold text-white">
          %{product.discount}
        </span>
      ) : null}

      <Link href={`/product/${product.slug}`} className="shrink-0">
        <div className="relative mx-auto h-[150px] w-[150px] overflow-hidden rounded-full bg-white">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="150px"
            unoptimized
            className="object-cover"
          />
        </div>
      </Link>

      <div className="mt-2 flex min-w-0 flex-1 flex-col">
        <Link href={`/product/${product.slug}`}>
          <h3 className="product-name line-clamp-2 min-h-[40px] text-center text-[15px] font-semibold text-brand-purple">
            {product.name}
          </h3>
        </Link>
        <p className="product-titr mt-1 line-clamp-2 min-h-[40px] text-center text-[11px] leading-5 text-neutral-500">
          {product.description}
        </p>

        <div className="mt-auto pt-3">
          <button
            type="button"
            onClick={() => addItem(product)}
            className="flex w-full items-center justify-between gap-2 rounded-full bg-white py-1 pl-1 pr-4 shadow-sm ring-1 ring-black/5 transition hover:ring-brand-green"
          >
            <span className="text-left">
              {product.salePrice ? (
                <span className="block text-[10px] text-neutral-400 line-through">
                  {formatPrice(product.price)}
                </span>
              ) : null}
              <span className="text-sm font-bold text-neutral-800">
                {formatPrice(unit)}{" "}
                <span className="text-[11px] font-normal text-neutral-500">تومان</span>
              </span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-brand-green px-3 py-2 text-[12px] font-semibold text-white">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-white/20 text-base leading-none">
                +
              </span>
              افزودن
            </span>
          </button>
        </div>
      </div>
    </article>
  );
}
