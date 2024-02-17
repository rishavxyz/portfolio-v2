/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead } from '../astro_CZkCPpGC.mjs';
import { $ as $$Layout } from './__CX0p1IGG.mjs';

const $$Astro = createAstro("https://v2.rishavmandal.xyz");
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="md:grid md:grid-cols-12 space-y-1"> <h1 class="col-start-1 col-end-13 lg:col-start-2 lg:col-end-12 text-2xl md:text-4xl font-bold leading-snug">I'm currently pursuing a Bachelor's degree in Computer Science Engineering (B.Tech).</h1> <h2 class="md:col-start-1 md:col-end-12 lg:col-start-2 lg:col-end-8 text-xl leading-snug font-serif">Back in 2020, I discovered my passion for web development and since then, I have been on an journey of learning. Web development has become my forte, and I have acquired a plethora of skills and knowledge in this field.</h2> <div class="col-start-1 col-end-8 lg:col-start-2 space-y-1"> <p>During my college years, I had the opportunity to delve into various aspects of computer science. From understanding the inner workings of operating systems, to exploring the intricacies of networking and the fascinating world of database management systems, my college education has provided me with a solid foundation.</p> <p>However, my true passion lies in frontend engineering. I love to create visually appealing and user-friendly websites that leave a lasting impression. The combination of captivating designs and seamless user experiences is what keeps me inspired and motivated.</p> <p>With every project, I strive to push myself further and stay up-to-date with the latest trends and technologies in web development. I am always eager to learn and expand my skill set, ensuring that I consistently deliver high-quality results.</p> </div> <div class="col-start-9 col-end-13 lg:col-end-12 space-y-1 md:[grid-row:3/3] lg:[grid-row:2/2]"> <h3 class="text-lg font-bold leading-snug">My most used tools and frameworks</h3> <p>
My go-to tools and frameworks include Svelte, TailwindCSS, Astro, Bun, and Supabase.
</p> </div> <p class="col-start-9 col-end-13 lg:col-end-12 md:[grid-row:3/3] md:self-end lg:self-start font-serif">I also write technical blogs with topics from ranging parsers in JavaScript to functional programming with Haskell. Check out <a href="/blogs" class="underline">my blogs.</a> </p> </section> ` })}`;
}, "/home/rain/projects/portfolio-astro/src/pages/about.astro", void 0);

const $$file = "/home/rain/projects/portfolio-astro/src/pages/about.astro";
const $$url = "/about";

export { $$About as default, $$file as file, $$url as url };
