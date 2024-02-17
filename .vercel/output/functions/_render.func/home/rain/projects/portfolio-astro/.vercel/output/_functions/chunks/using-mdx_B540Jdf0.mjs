const id = "using-mdx.mdx";
						const collection = "blog";
						const slug = "using-mdx";
						const body = "\nThis theme comes with the [@astrojs/mdx](https://docs.astro.build/en/guides/integrations-guide/mdx/) integration installed and configured in your `astro.config.mjs` config file. If you prefer not to use MDX, you can disable support by removing the integration from your config file.\n\n## Why MDX?\n\nMDX is a special flavor of Markdown that supports embedded JavaScript & JSX syntax. This unlocks the ability to [mix JavaScript and UI Components into your Markdown content](https://docs.astro.build/en/guides/markdown-content/#mdx-features) for things like interactive charts or alerts.\n\nIf you have existing content authored in MDX, this integration will hopefully make migrating to Astro a breeze.\n\n## Example\n\nHere is how you import and use a UI component inside of MDX.  \nWhen you open this page in the browser, you should see the clickable button below.\n\n```js\n// The line below is how it added\nimport { Hr } from \"$lib/components\";\n\n<Hr class=\"bg-black\" />\n```\n\nimport { Hr } from \"$lib/components\"\n\n<Hr class=\"bg-black\" />\n\n## More Links\n\n- [MDX Syntax Documentation](https://mdxjs.com/docs/what-is-mdx)\n- [Astro Usage Documentation](https://docs.astro.build/en/guides/markdown-content/#markdown-and-mdx-pages)\n- **Note:** [Client Directives](https://docs.astro.build/en/reference/directives-reference/#client-directives) are still required to create interactive components. Otherwise, all components in your MDX will render as static HTML (no JavaScript) by default.\n";
						const data = {title:"Using MDX",desc:"Lorem ipsum dolor sit amet",pubon:new Date(1656700200000),img:
						new Proxy({"src":"/_astro/blog-placeholder-5.CB3Xi-gp.jpg","width":960,"height":480,"format":"jpg","fsPath":"/home/rain/projects/portfolio-astro/src/media/blog-placeholder-5.jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/rain/projects/portfolio-astro/src/media/blog-placeholder-5.jpg";
							}
							
							return target[name];
						}
					})
					,draft:false};
						const _internal = {
							type: 'content',
							filePath: "/home/rain/projects/portfolio-astro/src/content/blog/using-mdx.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
