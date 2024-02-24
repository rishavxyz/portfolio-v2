import { supabase } from "$lib/supabase";
import sb_cookies from "$lib/utils";
import type { APIRoute } from "astro";

export const GET: APIRoute = async function(context) {
  context.locals.user = null;

  context.cookies.delete(sb_cookies.access_token, {
    path: "/"
  });
  context.cookies.delete(sb_cookies.refresh_token, {
    path: "/"
  });

  const { error } = await supabase.auth.signOut();

  if (error) return new Response(JSON.stringify({ error, type: "logout" }), { status: 500 });

  return context.redirect("/@/auth");
}
