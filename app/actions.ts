"use server";
import { cookies } from "next/headers";

import { createClient } from "@/lib/supabase/server";

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

export async function login(email: string, password: string) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return JSON.stringify({ error: error.message });
  } else {
    return JSON.stringify({ success: true });
  }
}

export async function signup(email: string, password: string) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    return JSON.stringify({ error: error.message });
  } else {
    return JSON.stringify({ success: true });
  }
}
