import { twMerge, type ClassNameValue } from "tailwind-merge";
import clsx from "clsx";
import type { CollectionEntry } from "astro:content";
import { getCollection } from "astro:content";
import { dev } from "$lib/env";

export function cn(...classes: ClassNameValue[]): string {
  return twMerge(clsx(classes));
}

export async function readingTime(content: string): Promise<number> {
  return Math.round(content.split(" ").length / 250);
}

export async function getBlogPosts({
  count = 6,
  category = undefined,
  slug = undefined,
}: {
  category?: string;
  count: number;
  slug?: string;
}) {
  const unsortedPosts = await getCollection("blog", (blog) =>
    dev ? true : !blog.data.draft,
  );
  const posts = category
    ? unsortedPosts.filter(
        (post) => post.slug != slug && post.data.category == category,
      )
    : unsortedPosts;

  return posts
    .sort((fst, snd) => snd.data.pubon.getTime() - fst.data.pubon.getTime())
    .slice(0, count);
}
