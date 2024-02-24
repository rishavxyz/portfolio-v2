export const prerender = false;

import { supabase } from "$lib/server/supabase";
import sb_cookies from "$lib/utils";
import { AuthError } from "@supabase/supabase-js";
import type { APIRoute } from "astro";

export const POST: APIRoute = async function ({ cookies, locals, redirect, request }) {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  if (!email || !password) {
    return new Response("Email and password are required", { status: 400 });
  }
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error instanceof AuthError) {
    return new Response(error.message, { status: 500 });
  }
  const { access_token, refresh_token } = data.session!;

  cookies.set(sb_cookies.access_token, access_token, {
    path: "/", secure: import.meta.env.PROD
  });
  cookies.set(sb_cookies.refresh_token, refresh_token, {
    path: "/", secure: import.meta.env.PROD
  });

  locals.user = data.session?.user ?? null;

  return redirect("/@");
}