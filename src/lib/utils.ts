import { twMerge, type ClassNameValue } from "tailwind-merge";
import clsx from "clsx";

export function cn(...classes: ClassNameValue[]): string {
  return twMerge(clsx(classes));
}

export async function readingTime(content: string): Promise<number> {
  return Math.round(content.split(" ").length / 250);
}

const sb_cookies = {
  access_token: "sb-access-token",
  refresh_token: "sb-refresh-token"
};
Object.freeze(sb_cookies);
export default sb_cookies;