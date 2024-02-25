import { lucia, prisma } from "$lib/server/auth";
import { generateId } from "lucia";
import { Argon2id } from "oslo/password";

import type { APIContext } from "astro";

export async function POST(context: APIContext) {
  const { email, password } = Object.fromEntries(await context.request.formData());
  
  if (!email || !password) return new Response(
    "Password and email are required", { status: 403 }
  );
  
  const existingUser = await prisma.user.findUnique({
    where: { email: String(email) }, select: { password: true, id: true }
  });

  if (!existingUser) return new Response(
    "Invalid email given", { status: 400 }
  );

  if ( await new Argon2id()
    .verify(existingUser.password, String(password)) == false
  ) return new Response("Password doesn't match", { status: 400 });


  const session = await lucia.createSession(existingUser.id, {});
  const sessionCookie = lucia.createSessionCookie(session.id);

  context.cookies.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
  
  return context.redirect("/admin/dashboard");
}