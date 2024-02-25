import { lucia } from "$lib/server/auth";
import type { MiddlewareHandler } from "astro";
import { verifyRequestOrigin } from "lucia";

export const onRequest: MiddlewareHandler = async (
  { cookies, locals, request }, next
) => {
  if (request.method != "GET") {
      
    const origin = request.headers.get("Origin");
    const host = request.headers.get("Host");

    if ( !origin || !host || !verifyRequestOrigin(origin, [host])
    ) return new Response("CSRF error", { status: 403 });
  }

  const sessionID = cookies.get(lucia.sessionCookieName)?.value ?? null;

  if (!sessionID) {
    locals.session = null;
    locals.user = null;
    return next();
  }

  const { session, user } = await lucia.validateSession(sessionID);

  if (session && session.fresh) {
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
  }

  if (!session) {
    const sessionCookie = lucia.createBlankSessionCookie();
    cookies.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
  }

  locals.session = session;
  locals.user = user;
  
  return next();
};