"use server";
import { cookies } from "next/headers";
import { createClient } from "./server";

export async function readUserSession() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  return await supabase.auth.getUser();
}
