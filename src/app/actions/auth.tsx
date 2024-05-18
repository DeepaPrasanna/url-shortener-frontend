"use server";

import { redirect } from "next/navigation";
import { createClient } from "../utils/supabase/server";

export async function login() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: "https://teenyurl.in/auth/callback",
    },
  });

  console.log({ data });

  if (data.url) {
    redirect(data.url); // use the redirect API for your server framework
  }
}

export async function logout() {
  const supabase = createClient();

  const { error } = await supabase.auth.signOut();
}
