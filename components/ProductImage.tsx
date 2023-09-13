"use client";
import React, { useState } from "react";
import Image from "next/image";
type Props = {
  product: Product;
  fill: boolean;
};

export default function ProductImage({ product, fill }: Props) {
  const [loading, setLoading] = useState(true);
  return (
    <>
      {fill ? (
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 640px) 100vw, 100vw"
          className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
            loading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          }}`}
          onLoadingComplete={() => setLoading(false)}
        />
      ) : (
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={1000}
          sizes="(max-width: 640px) 100vw, 100vw"
          className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
            loading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          }}`}
          onLoadingComplete={() => setLoading(false)}
        />
      )}
    </>
  );
}
