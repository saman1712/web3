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
    <article className="product-slider-wrapper group relative flex items-center gap-3 rounded-xl bg-[#f6f6f6] p-2 pb-4 sm:flex-col sm:items-stretch sm:p-3">
      {product.discount ? (
        <span className="absolute right-2 top-2 z-10 rounded-md bg-brand-green px-1.5 py-0.5 text-[11px] font-bold text-white">
          %{product.discount}
        </span>
      ) : null}

      <Link href={`/product/${product.slug}`} className="shrink-0">
        <div className="relative h-[88px] w-[88px] overflow-hidden rounded-full bg-white sm:mx-auto sm:h-[150px] sm:w-[150px]">
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

      <div className="min-w-0 flex-1 sm:flex sm:flex-col">
        <Link href={`/product/${product.slug}`}>
          <h3 className="product-name two-line-text line-clamp-2 text-[13px] font-semibold text-neutral-800 sm:mt-2 sm:min-h-[40px] sm:text-center sm:text-[15px] sm:text-brand-purple">
            {product.name}
          </h3>
        </Link>
        <p className="product-titr mt-1 line-clamp-2 text-[11px] leading-5 text-neutral-500 sm:min-h-[40px] sm:text-center">
          {product.description}
        </p>

        <div className="product-slider-price mt-2 flex items-end justify-between sm:mt-auto sm:pt-3">
          <button
            type="button"
            onClick={() => addItem(product)}
            aria-label="افزودن کالا به سبد خرید"
            className="grid h-9 w-9 place-items-center rounded-full bg-brand-green text-lg font-bold text-white sm:h-11 sm:w-11"
          >
            +
          </button>
          <div className="text-left">
            {product.salePrice ? (
              <div className="mainPrice-temp text-[11px] text-neutral-400 line-through">
                {formatPrice(product.price)}
              </div>
            ) : null}
            <div className="price-temp text-sm font-bold text-neutral-800">
              {formatPrice(unit)}{" "}
              <span className="text-[11px] font-normal text-neutral-500">تومان</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
