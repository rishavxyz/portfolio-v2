export const prerender = false;

import { supabase } from "$lib/server/supabase";
import type { APIRoute } from "astro";

export const POST: APIRoute = async function (context) {
  const { error } = await supabase.auth.signOut();

  if (error) return new Response(JSON.stringify({ error, type: "logout" }));
  
  return context.redirect("/@/auth");
}