import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Splitting from "splitting";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

const _lenis = new Lenis({
  easing: (x) => 1 - Math.pow(1 - x, 4),
});

export function lenis(time = 1000) {
  _lenis.raf(time);
  requestAnimationFrame(lenis);
}

export { gsap, Splitting as split };
