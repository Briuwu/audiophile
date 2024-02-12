"use server";
import { cookies } from "next/headers";

import { createClient } from "@/lib/supabase/server";
import { readUserSession } from "@/lib/supabase/read-session";
import { redirect } from "next/navigation";

export async function loginWithMagicLink(email: string) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      shouldCreateUser: true,
    },
  });

  if (error) {
    return JSON.stringify({ error: error.message });
  } else {
    return JSON.stringify({ success: true });
  }
}

export async function productsInCart() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await readUserSession();

  if (!user) {
    return redirect("/");
  }

  const { data: cart, error } = await supabase
    .from("cart")
    .select("*")
    .eq("user_id", user?.id);

  if (error) {
    console.log(error);
    return redirect("/");
  }

  const { data: products, error: productError } = await supabase
    .from("products")
    .select("*")
    .in(
      "id",
      cart.map((item) => item.product_id),
    );

  if (productError) {
    console.log(productError);
    return redirect("/");
  }

  return products.map((product) => ({
    ...product,
    product_image: `/assets/product-${product.slug}/desktop/image-product.jpg`,
    quantity: cart.find((item) => item.product_id === product.id)?.quantity!,
  }));
}
