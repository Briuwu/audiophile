"use server";
import { cookies } from "next/headers";
import { z } from "zod";

import { createClient } from "@/lib/supabase/server";
import { readUserSession } from "@/lib/supabase/read-session";
import { redirect } from "next/navigation";
import { checkoutSchema } from "@/schema/checkout-schema";
import { revalidatePath } from "next/cache";

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

export async function handleOrders(
  productsId: string[],
  data: z.infer<typeof checkoutSchema>,
) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await readUserSession();

  if (!user) {
    return redirect("/");
  }

  const { data: billingInfo, error: billingInfoError } = await supabase
    .from("billing_info")
    .insert({
      user_id: user.id,
      email: data.email,
      name: data.name,
      address: data.street,
      city: data.city,
      zip_code: data.zip_code,
      country: data.country,
      phone: data.phone,
    })
    .select("id")
    .single();

  if (billingInfoError) {
    console.log(billingInfoError);
    return JSON.stringify({ error: billingInfoError.message });
  }

  const { error } = await supabase.from("orders").insert({
    products: productsId,
    user_id: user.id,
    billing_id: billingInfo.id,
  });

  if (error) {
    console.log(error);
    return JSON.stringify({ error: error.message });
  }

  return JSON.stringify({ success: true });
}

export async function removeOrders() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await readUserSession();

  if (!user) {
    return redirect("/");
  }

  const { error: cartError } = await supabase
    .from("cart")
    .delete()
    .eq("user_id", user.id);

  if (cartError) {
    return JSON.stringify({ error: cartError.message });
  }

  revalidatePath("/", "layout");
}
