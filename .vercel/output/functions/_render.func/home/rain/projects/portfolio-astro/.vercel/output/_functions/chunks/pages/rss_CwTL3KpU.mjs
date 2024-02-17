import rss from '@astrojs/rss';
import { b as getCollection, T as TITLE, D as DESCRIPTION } from './__CX0p1IGG.mjs';

async function GET(context) {
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

export { GET };
