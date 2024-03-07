export const prerender = true;

import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { TITLE, DESCRIPTION } from '$lib/consts';

export async function GET(context) {
  const posts = await getCollection('blog');
  return rss({
    title: TITLE,
    description: DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      pubDate: post.data.pubon,
      link: `/blog/${post.slug}/`,
    })),
  });
}
