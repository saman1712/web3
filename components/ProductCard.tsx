"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Product } from "@/lib/types";
import { formatPrice } from "@/lib/format";
import { useShop } from "@/lib/store";

export function ProductCard({ product }: { product: Product }) {
  const addItem = useShop((s) => s.addItem);
  const unit = product.salePrice ?? product.price;

  return (
    <motion.article
      layout
      whileHover={{ y: -4 }}
      className="group relative flex flex-col rounded-card bg-white p-4 shadow-card transition hover:shadow-card-hover"
    >
      {product.discount ? (
        <span className="absolute right-3 top-3 z-10 rounded-full bg-brand-green px-2 py-0.5 text-xs font-bold text-white">
          %{product.discount}
        </span>
      ) : null}

      <Link href={`/product/${product.slug}`} className="mx-auto block">
        <div className="relative mx-auto h-[150px] w-[150px] overflow-hidden rounded-full bg-neutral-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="150px"
            unoptimized
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      </Link>

      <Link href={`/product/${product.slug}`} className="mt-3">
        <h3 className="line-clamp-2 min-h-[48px] text-center text-[15px] font-semibold text-brand-purple">
          {product.name}
        </h3>
      </Link>
      <p className="mt-1 line-clamp-2 min-h-[40px] text-center text-xs leading-5 text-neutral-500">
        {product.description}
      </p>

      <div className="mt-auto flex items-end justify-between pt-3">
        <button
          type="button"
          onClick={() => addItem(product)}
          aria-label="افزودن کالا به سبد خرید"
          className="grid h-11 w-11 place-items-center rounded-full bg-brand-green text-xl font-bold text-white shadow transition hover:bg-brand-green-dark"
        >
          +
        </button>
        <div className="text-left">
          {product.salePrice ? (
            <div className="text-[11px] text-neutral-400 line-through">
              {formatPrice(product.price)}
            </div>
          ) : null}
          <div className="text-sm font-bold text-neutral-800">
            {formatPrice(unit)}{" "}
            <span className="text-[11px] font-normal text-neutral-500">تومان</span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
