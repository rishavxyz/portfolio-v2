import { twMerge, type ClassNameValue } from "tailwind-merge";
import clsx from "clsx";

export function cn(...classes: ClassNameValue[]): string {
  return twMerge(clsx(classes));
}

export async function readingTime(content: string): Promise<number> {
  return Math.round(content.split(" ").length / 250);
}