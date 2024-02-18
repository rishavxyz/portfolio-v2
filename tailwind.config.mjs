import { fontFamily as ff } from "tailwindcss/defaultTheme";
import typography from "@tailwindcss/typography";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontSize: {
			"2xs":"clamp(0.512rem, 0.4933rem + 0.1067vi, 0.576rem)",
			"xs":"clamp(0.64rem, 0.6167rem + 0.1333vi, 0.72rem)",
			"sm":"clamp(0.8rem, 0.7708rem + 0.1667vi, 0.9rem)",
			"base":"clamp(1rem, 0.9635rem + 0.2083vi, 1.125rem)",
			"lg":"clamp(1.25rem, 1.2044rem + 0.2604vi, 1.4063rem)",
			"xl":"clamp(1.5625rem, 1.5055rem + 0.3255vi, 1.7578rem)",
			"2xl":"clamp(1.9531rem, 1.8819rem + 0.4069vi, 2.1973rem)",
			"3xl":"clamp(2.4414rem, 2.3524rem + 0.5086vi, 2.7466rem)",
			"4xl":"clamp(3.0518rem, 2.9405rem + 0.6358vi, 3.4332rem)",
			"5xl":"clamp(3.8147rem, 3.6756rem + 0.7947vi, 4.2915rem)",
			"6xl":"clamp(4.7684rem, 4.5945rem + 0.9934vi, 5.3644rem)",
		},
		fontFamily: {
			sans: ["Roboto", ...ff.sans],
			serif: ["'PT Serif'", ...ff.serif],
			mono: ["'Ubuntu Mono'", ...ff.mono],
			display: ["Oswald", ...ff.sans]
		},
		spacing: {
			"0": "0",
			"0.125": "clamp(0.3125rem, 0.3125rem + 0vi, 0.3125rem)",
			"0.25": "clamp(0.5625rem, 0.5443rem + 0.1042vi, 0.625rem)",
			"0.5":	 "clamp(0.875rem, 0.8568rem + 0.1042vi, 0.9375rem)",
			"1":	 "clamp(1.125rem, 1.0885rem + 0.2083vi, 1.25rem)",
			"2":	 "clamp(1.6875rem, 1.6328rem + 0.3125vi, 1.875rem)",
			"3":	 "clamp(2.25rem, 2.1771rem + 0.4167vi, 2.5rem)",
			"4":	 "clamp(3.375rem, 3.2656rem + 0.625vi, 3.75rem)",
			"5": "clamp(4.5rem, 4.3542rem + 0.8333vi, 5rem)",
			"6": "clamp(6.75rem, 6.5313rem + 1.25vi, 7.5rem)",
		},
		extend: {
			colors: {
				black: "#131313",
				white: "#f7f7f7",
				muted: "#606060"
			},
		},
	},
	plugins: [forms, typography],
}
