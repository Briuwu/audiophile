import Image from "next/image";
import { notFound } from "next/navigation";
import createSupabaseServerClient from "@/lib/supabase/server";

import { Product } from "@/types";
import { cn } from "@/lib/utils";
import { LinkButton } from "@/components/link-button";
import { CategorySection } from "@/components/category-section";

export async function generateMetadata({
  params,
}: {
  params: { product: string };
}) {
  return {
    title: `${params.product.toUpperCase()} | Audiophile`,
    description: `Check out our ${params.product} products.`,
  };
}

export default async function Category({
  params,
}: {
  params: { product: string };
}) {
  const supabase = await createSupabaseServerClient();

  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .eq("category", params.product)
    .order("new", { ascending: false });

  if (error) {
    console.error(error);
    return notFound();
  }

  const displayProduct = products.map((product, index) => ({
    ...product,
    images: {
      mobile: `/assets/product-${product.slug}/mobile/image-category-page-preview.jpg`,
      tablet: `/assets/product-${product.slug}/tablet/image-category-page-preview.jpg`,
      desktop: `/assets/product-${product.slug}/desktop/image-category-page-preview.jpg`,
    },
    order: index % 2 !== 0,
  }));

  return (
    <>
      <h1 className="bg-black p-8 text-center text-3xl font-bold uppercase tracking-widest text-white">
        {params.product}
      </h1>
      <div className="container">
        {displayProduct.map((product) => (
          <Item key={product.id} product={product} />
        ))}
        <CategorySection />
      </div>
    </>
  );
}

const Item = ({ product }: { product: Product }) => {
  return (
    <div className="my-28 text-center lg:grid lg:grid-cols-2 lg:place-items-center lg:text-left">
      <div className={cn("mb-8", product.order && "order-2")}>
        <Image
          src={product.images.mobile}
          alt={product.name}
          width={654}
          height={704}
          className="mx-auto rounded-xl md:hidden"
        />
        <Image
          src={product.images.tablet}
          alt={product.name}
          width={1378}
          height={704}
          className="mx-auto hidden rounded-xl md:block lg:hidden"
        />
        <Image
          src={product.images.desktop}
          alt={product.name}
          width={1080}
          height={1120}
          className="mx-auto hidden rounded-xl lg:block"
        />
      </div>
      <div
        className={cn(
          "space-y-6 md:mx-auto md:max-w-max lg:max-w-md",
          product.order && "order-1",
        )}
      >
        {product.new && (
          <p className="text-sm uppercase tracking-[.5rem] text-orange-400">
            New Product
          </p>
        )}
        <h2 className="text-3xl font-bold lg:text-[2.5rem] lg:tracking-wider">
          {product.name}
        </h2>
        <p className="opacity-75">{product.description}</p>
        <LinkButton
          href={`/${product.category}/${product.slug}`}
          className="bg-orange-800 text-white hover:bg-orange-400"
        >
          See Product
        </LinkButton>
      </div>
    </div>
  );
};
