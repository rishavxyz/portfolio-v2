import { Lucia } from "lucia";
import { PrismaAdapter }  from "@lucia-auth/adapter-prisma";
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export const lucia = new Lucia(
  new PrismaAdapter(prisma.session, prisma.user), {
  sessionCookie: {
    attributes: { secure: import.meta.env.PROD }
  },
  getUserAttributes(attributes) {
    return {
      email: attributes.email,
      name: attributes.name
    }
  }
});

declare module "lucia" {
  interface Register {
    Lucia: typeof lucia;
    DatabaseUserAttributes: DatabaseUserAttributes
  }
}

interface DatabaseUserAttributes {
  email: string;
  name: string;
}