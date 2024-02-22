import { supabase } from "$lib/server/supabase";
import type { APIRoute } from "astro";

export const POST: APIRoute = async function (Astro) {

  const { error } = await supabase.auth.signOut();

  if (error) return new Response(JSON.stringify({ error, type: "logout" }));
  
  Astro.cookies.delete("access_token");
  Astro.cookies.delete("refresh_token");
  
  return Astro.redirect("/@/auth");
}