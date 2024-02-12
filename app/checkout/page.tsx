import Link from "next/link";
import { readUserSession } from "@/lib/supabase/read-session";
import { redirect } from "next/navigation";
import { productsInCart } from "@/app/actions";
import CheckoutForm from "./_components/checkout-form";

export default async function CheckoutPage() {
  const {
    data: { user },
  } = await readUserSession();

  if (!user) {
    return redirect("/");
  }

  const displayProducts = await productsInCart();

  if (displayProducts.length === 0) {
    return redirect("/");
  }

  return (
    <div className="container">
      <Link
        href="/"
        className="mt-4 inline-block font-semibold opacity-50 hover:underline hover:opacity-100 lg:mt-20"
      >
        Go back
      </Link>
      <div className="mt-6">
        <CheckoutForm products={displayProducts} />
      </div>
    </div>
  );
}
