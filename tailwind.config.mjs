import {
  fontFamily as ff,
  borderRadius as rounded,
} from "tailwindcss/defaultTheme";
import typography from "@tailwindcss/typography";
import forms from "@tailwindcss/forms";
import colors, { amber, rose, neutral } from "tailwindcss/colors";
import plugin from "tailwindcss/plugin";
import svelteUX from "svelte-ux/plugins/tailwind.cjs";

const { DEFAULT, ...borderRadiuses } = rounded;

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/svelte-ux/**/*.{svelte,js}",
  ],
  ux: {
    // See customization docs
    themes: {
      light: {
        primary: colors["orange"]["500"],
        "primary-content": "white",
        secondary: colors["blue"]["500"],
        "surface-100": "white",
        "surface-200": colors["gray"]["100"],
        "surface-300": colors["gray"]["300"],
        "surface-content": colors["gray"]["900"],
        "color-scheme": "light",
      },
      dark: {
        primary: colors["orange"]["500"],
        "primary-content": "white",
        secondary: colors["blue"]["500"],
        "surface-100": colors["zinc"]["800"],
        "surface-200": colors["zinc"]["900"],
        "surface-300": colors["zinc"]["950"],
        "surface-content": colors["zinc"]["100"],
        "color-scheme": "dark",
      },
    },
  },
  theme: {
    borderRadius: {
      DEFAULT: "clamp(1.44rem, 1.3051rem + 0.771vi, 1.999rem)",
      ...borderRadiuses,
    },
    fontSize: {
      // 16 - 18 px
      xs: "clamp(0.6331rem, 0.7092rem + -0.0846vi, 0.6944rem)",
      sm: "clamp(0.8333rem, 0.8308rem + 0.0147vi, 0.844rem)",
      base: "clamp(1rem, 0.9698rem + 0.1724vi, 1.125rem)",
      lg: "clamp(1.2rem, 1.1277rem + 0.4133vi, 1.4996rem)",
      xl: "clamp(1.44rem, 1.3051rem + 0.771vi, 1.999rem)",
      "2xl": "clamp(1.728rem, 1.5019rem + 1.292vi, 2.6647rem)",
      "3xl": "clamp(2.0736rem, 1.7167rem + 2.0392vi, 3.552rem)",
      "4xl": "clamp(2.4883rem, 1.9461rem + 3.0986vi, 4.7348rem)",
      "5xl": "clamp(2.986rem, 2.1833rem + 4.5869vi, 6.3115rem)",
      "6xl": "clamp(3.5832rem, 2.4173rem + 6.6622vi, 8.4132rem)",
    },
    fontFamily: {
      sans: ["Roboto", ...ff.sans],
      serif: ["'PT Serif'", ...ff.serif],
      mono: ["'Ubuntu Mono'", ...ff.mono],
      display: ["'Clash Display'", ...ff.sans],
    },
    extend: {
      colors: {
        black: neutral[950],
        white: neutral[50],
        primary: { DEFAULT: amber[400], ...amber },
        secondary: { DEFAULT: rose[400], ...rose },
        muted: {
          light: neutral[400],
          dark: neutral[800],
        },
      },
      spacing: {
        // One up pairs: 4px - 108px
        "3xs": "clamp(0.25rem, 0.1746rem + 0.431vi, 0.5625rem)",
        "2xs": "clamp(0.5rem, 0.4095rem + 0.5172vi, 0.875rem)",
        xs: "clamp(0.75rem, 0.6595rem + 0.5172vi, 1.125rem)",
        sm: "clamp(1rem, 0.8341rem + 0.9483vi, 1.6875rem)",
        md: "clamp(1.5rem, 1.319rem + 1.0345vi, 2.25rem)",
        lg: "clamp(2rem, 1.6681rem + 1.8966vi, 3.375rem)",
        xl: "clamp(3rem, 2.6379rem + 2.069vi, 4.5rem)",
        "2xl": "clamp(4rem, 3.3362rem + 3.7931vi, 6.75rem)",
      },
      typography: function ({ theme }) {
        return {
          black: {
            css: {
              // light mode | light background
              "--tw-prose-body": theme("colors.black"),
              "--tw-prose-headings": theme("colors.black"),
              "--tw-prose-lead": theme("colors.neutral[700]"),
              "--tw-prose-links": theme("colors.black"),
              "--tw-prose-bold": theme("colors.black"),
              "--tw-prose-counters": theme("colors.neutral[600]"),
              "--tw-prose-bullets": theme("colors.neutral[900]"),
              "--tw-prose-hr": theme("colors.neutral[300]"),
              "--tw-prose-quotes": theme("colors.neutral[900]"),
              "--tw-prose-quote-borders": theme("colors.neutral[300]"),
              "--tw-prose-captions": theme("colors.neutral[700]"),
              "--tw-prose-code": theme("colors.black"),
              "--tw-prose-pre-code": theme("colors.neutral[100]"),
              "--tw-prose-pre-bg": theme("colors.black"),
              "--tw-prose-th-borders": theme("colors.neutral[400]"),
              "--tw-prose-td-borders": theme("colors.neutral[300]"),
              // dark mode | invert | dark background
              "--tw-prose-invert-body": theme("colors.white"),
              "--tw-prose-invert-headings": theme("colors.white"),
              "--tw-prose-invert-lead": theme("colors.neutral[300]"),
              "--tw-prose-invert-links": theme("colors.white"),
              "--tw-prose-invert-bold": theme("colors.white"),
              "--tw-prose-invert-counters": theme("colors.neutral[400]"),
              "--tw-prose-invert-bullets": theme("colors.neutral[600]"),
              "--tw-prose-invert-hr": theme("colors.neutral[700]"),
              "--tw-prose-invert-quotes": theme("colors.neutral[100]"),
              "--tw-prose-invert-quote-borders": theme("colors.neutral[700]"),
              "--tw-prose-invert-captions": theme("colors.neutral[400]"),
              "--tw-prose-invert-code": theme("colors.white"),
              "--tw-prose-invert-pre-code": theme("colors.neutral[300]"),
              "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
              "--tw-prose-invert-th-borders": theme("colors.neutral[600]"),
              "--tw-prose-invert-td-borders": theme("colors.neutral[700]"),
            },
          },
        };
      },
    },
  },
  plugins: [
    forms,
    typography,
    plugin(({ addComponents, theme }) =>
      addComponents({
        ".primary": {
          backgroundColor: theme("colors.primary[500]"),
          color: theme("colors.primary[950]"),
        },
        ".secondary": {
          backgroundColor: theme("colors.secondary[600]"),
          color: theme("colors.secondary[100]"),
        },
      }),
    ),
    svelteUX,
  ],
};
