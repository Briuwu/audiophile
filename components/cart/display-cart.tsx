import { readUserSession } from "@/lib/supabase/read-session";
import { Cart } from "./cart";
import { LoginDropdown } from "../login/login-dropdown";
import { cookies } from "next/headers";
import { SignOut } from "../login/sign-out";

export async function DisplayCart() {
  const cookieStore = cookies();
  const {
    data: { user },
  } = await readUserSession();

  if (!user) {
    return <LoginDropdown />;
  }

  return (
    <div className="flex items-center gap-2">
      <Cart />
      <SignOut />
    </div>
  );
}
