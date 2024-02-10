import createSupabaseServerClient from "@/lib/supabase/server";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { IncludedItem } from "@/types";
import { AddToCart } from "./_components/add-to-cart";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const supabase = await createSupabaseServerClient();

  const { data: product, error } = await supabase
    .from("products")
    .select("*")
    .eq("slug", params.slug)
    .single();

  if (error) {
    console.error(error);
    return notFound();
  }

  return {
    title: `${product.name} | Audiophile`,
    description: product.description,
  };
}

export default async function Product({
  params,
}: {
  params: {
    product: string;
    slug: string;
  };
}) {
  const supabase = await createSupabaseServerClient();

  const { data: product, error } = await supabase
    .from("products")
    .select("*")
    .eq("slug", params.slug)
    .single();

  if (error) {
    console.error(error);
    return notFound();
  }

  const displayProduct = {
    ...product,
    images: {
      mobile: `/assets/product-${product.slug}/mobile/image-product.jpg`,
      tablet: `/assets/product-${product.slug}/tablet/image-product.jpg`,
      desktop: `/assets/product-${product.slug}/desktop/image-product.jpg`,
    },
  };

  const replaceWithBr = (str: string) =>
    str.split("\\n").map((s, i) => (
      <span key={i}>
        {s}
        <br />
      </span>
    ));

  const includedItems: IncludedItem[] = JSON.parse(
    JSON.stringify(displayProduct.includes),
  );
  return (
    <div className="container">
      <Link
        href={`/${params.product}`}
        className="mt-4 inline-block font-semibold opacity-50 hover:underline hover:opacity-100 lg:mt-20"
      >
        Go back
      </Link>
      <div className="md:mt-6 md:grid md:grid-cols-2 md:gap-16 lg:mt-14 lg:gap-32">
        <div className="mb-8 mt-6 md:my-0">
          <Image
            src={displayProduct.images.mobile}
            alt={displayProduct.name}
            width={654}
            height={654}
            className="rounded-xl md:hidden"
          />
          <Image
            src={displayProduct.images.tablet}
            alt={displayProduct.name}
            width={562}
            height={960}
            className="hidden rounded-xl md:block lg:hidden"
          />
          <Image
            src={displayProduct.images.desktop}
            alt={displayProduct.name}
            width={1080}
            height={1120}
            className="hidden rounded-xl lg:block"
          />
        </div>
        <div className="space-y-6 self-center">
          {displayProduct.new && (
            <p className="mb-6 text-sm uppercase tracking-[.5rem] text-orange-400">
              New Product
            </p>
          )}
          <h1 className="text-3xl font-bold">{displayProduct.name}</h1>
          <p className="opacity-75">{displayProduct.description}</p>
          <p className="text-lg font-bold tracking-wide">
            $ {new Intl.NumberFormat().format(displayProduct.price)}
          </p>
          <AddToCart />
        </div>
      </div>
      <div className="my-20 grid gap-20 md:my-28 md:gap-28 lg:grid-cols-2 lg:gap-32">
        <div>
          <h2 className="mb-6 text-2xl font-bold uppercase">Features</h2>
          <p className="whitespace-pre-wrap opacity-75">
            {replaceWithBr(displayProduct.features)}
          </p>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-col">
          <h3 className="mb-6 text-2xl font-bold uppercase">In the box</h3>
          <ul className="space-y-2 md:mx-auto lg:mx-0">
            {includedItems.map((item) => (
              <li key={item.item} className="space-x-6">
                <span className="inline-block font-bold text-orange-800">
                  {item.quantity}x
                </span>{" "}
                <span className="inline-block font-semibold opacity-50">
                  {item.item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
