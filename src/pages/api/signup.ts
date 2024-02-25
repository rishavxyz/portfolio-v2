import { lucia, prisma } from "$lib/server/auth";
import { generateId } from "lucia";
import { Argon2id } from "oslo/password";

import type { APIContext } from "astro";

export async function POST(context: APIContext) {
  const { email, name, password } = Object.fromEntries(await context.request.formData());
  
  if (!email || !password) return new Response(
    "Password and email are required", { status: 403 }
  );

  const existingUser = await prisma.user.findUnique({ where: { email: String(email) } });
  if (existingUser) return new Response(
    `Already have the user. Sign in instead.`,
    { status: 403 }
  );

  const uid =  generateId(String(email).length);
  const hashPassword = await new Argon2id().hash(String(password));

  await prisma.user.create({
    data: { id: uid, password: hashPassword, name: String(name), email: String(email) }
  });

  const session = await lucia.createSession(uid, {});
  const sessionCookie = lucia.createSessionCookie(session.id);

  context.cookies.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
  
  return context.redirect("/admin/dashboard");
}