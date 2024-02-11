import { readUserSession } from "@/lib/supabase/read-session";
import { Cart } from "./cart";
import { LoginDropdown } from "../login/login-dropdown";
import { cookies } from "next/headers";
import { SignOut } from "../login/sign-out";
import { createClient } from "@/lib/supabase/server";

export async function DisplayCart() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await readUserSession();

  if (!user) {
    return <LoginDropdown />;
  }

  const { data: cart, error } = await supabase
    .from("cart")
    .select("*")
    .eq("user_id", user?.id);

  if (error) {
    return <p>Error loading cart</p>;
  }

  const { data: products, error: productError } = await supabase
    .from("products")
    .select("*")
    .in(
      "id",
      cart.map((item) => item.product_id),
    );

  if (productError) {
    return <p>Error loading products</p>;
  }

  const displayProducts = products.map((product) => ({
    ...product,
    product_image: `/assets/product-${product.slug}/desktop/image-product.jpg`,
    quantity: cart.find((item) => item.product_id === product.id)?.quantity,
  }));

  return (
    <div className="flex items-center gap-2">
      <Cart products={displayProducts} user={user} />
      <SignOut />
    </div>
  );
}
