import createSupabaseServerClient from "@/lib/supabase/server";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

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

  return (
    <div className="container">
      <Link
        href={`/${params.product}`}
        className="mt-4 inline-block font-semibold opacity-75 hover:underline hover:opacity-100"
      >
        Go back
      </Link>
      <div className="mb-8 mt-6">
        <Image
          src={displayProduct.images.mobile}
          alt={displayProduct.name}
          width={654}
          height={654}
          className="rounded-xl"
        />
      </div>
      {displayProduct.new && (
        <p className="mb-6 text-sm uppercase tracking-[.5rem] text-orange-400">
          New Product
        </p>
      )}
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">{displayProduct.name}</h1>
        <p className="opacity-75">{displayProduct.description}</p>
        <p className="text-lg font-bold tracking-wide">
          $ {new Intl.NumberFormat().format(displayProduct.price)}
        </p>
      </div>
    </div>
  );
}
