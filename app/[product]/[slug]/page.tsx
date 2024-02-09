export default function Product({
  params,
}: {
  params: {
    product: string;
    slug: string;
  };
}) {
  return (
    <h1>
      {params.product} - {params.slug}
    </h1>
  );
}
