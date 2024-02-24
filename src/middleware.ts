import { supabase } from "$lib/supabase";
import sb_cookies from "$lib/utils";
import type { MiddlewareHandler } from "astro";

export const onRequest: MiddlewareHandler = async (
  { cookies, locals, redirect, request, url }, next
) => {
  if (request.method != "GET") {
    if ( !request.headers.get("Origin")
      || !request.headers.get("Host")
    ) return new Response("CSRF Error", { status: 403 });
  }
  const access_token = cookies.get(sb_cookies.access_token)?.value ?? null;
  const refresh_token = cookies.get(sb_cookies.refresh_token)?.value ?? null;
  
  console.log("middleware:", url.pathname);
  console.log("middleware test:", /\/@\/[auth]/i.test(url.pathname));
  console.log("AUTH NEEDED IF:", url.pathname.includes("/@") && !/\/@\/[auth]/i.test(url.pathname));

  if (!access_token || !refresh_token) {
    locals.user = null;
    return next();
  }
  if (url.pathname.includes("/@")) {
    const { data: { session }, error } = await supabase.auth.setSession({
      access_token, refresh_token
    });

    if (error || !session) {
      locals.user = null;
      cookies.delete(sb_cookies.access_token, { path: "/" });
      cookies.delete(sb_cookies.refresh_token, { path: "/" });

      return redirect("/@/auth");
    }

    locals.user = session.user;
    
    return next();
  }
  
  return next();
};