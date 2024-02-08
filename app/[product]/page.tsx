export default function Product({ params }: { params: { product: string } }) {
  const { product } = params;
  return <h1>{product}</h1>;
}
