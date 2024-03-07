import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Splitting from 'splitting';
import Lenis from '@studio-freight/lenis';

gsap.registerPlugin(ScrollTrigger);

const _lenis = new Lenis({
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

export function lenis(time = 1000) {
  _lenis.raf(time);
  requestAnimationFrame(lenis);
}

export { gsap, Splitting as split };
