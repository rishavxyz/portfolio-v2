export const prerender = false;

import { supabase } from "$lib/server/supabase";
import type { APIRoute } from "astro";

export const GET: APIRoute = async function(context) {

  context.cookies.delete("sb-access_token", {
    path: "/"
  });

  context.cookies.delete("sb-refresh_token", {
    path: "/"
  });

  const { error } = await supabase.auth.signOut();

  if (error) return new Response(JSON.stringify({ error, type: "logout" }));

  return context.redirect("/@/auth");
}
