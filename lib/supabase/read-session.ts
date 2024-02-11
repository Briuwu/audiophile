"use server";
import { cookies } from "next/headers";
import { createClient } from "./server";
import { redirect } from "next/navigation";

export async function readUserSession() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  return await supabase.auth.getUser();
}
