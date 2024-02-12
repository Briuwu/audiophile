import { readUserSession } from "@/lib/supabase/read-session";
import { Cart } from "./cart";
import { LoginDropdown } from "../login/login-dropdown";
import { cookies } from "next/headers";
import { SignOut } from "../login/sign-out";
import { createClient } from "@/lib/supabase/server";
import { productsInCart } from "@/app/actions";

export async function DisplayCart() {
  const {
    data: { user },
  } = await readUserSession();

  if (!user) {
    return <LoginDropdown />;
  }

  const displayProducts = await productsInCart();

  return (
    <div className="flex items-center gap-2">
      <Cart products={displayProducts} user={user} />
      <SignOut />
    </div>
  );
}
