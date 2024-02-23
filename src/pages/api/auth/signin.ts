export const prerender = false;

import { supabase } from "$lib/server/supabase";
import type { APIRoute } from "astro";

export const POST: APIRoute = async function(context) {
  const formData = await context.request.formData();
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));

  try {
    const { data, error } = await supabase.auth.signInWithPassword(
      { email, password }
    );

    if (error
    ) return context.redirect("/@/auth?r=" + error.message);

    const session = data.session;

    if (!session
    ) return context.redirect("/@/auth?r=Could not find your session");

    context.cookies.set("sb-access_token", session.access_token, {
      path: "/"
    });

    context.cookies.set("sb-refresh_token", session.refresh_token, {
      path: "/"
    });

    return context.redirect("/@");
  }
  catch (error) {
    return context.redirect("/@/auth?r=" + String(error));
  }
}
