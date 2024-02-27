import type { MarkdownHeading } from "astro";

export type Heading = MarkdownHeading;
export type TableOfContent =
  | MarkdownHeading
  | Array<
      | MarkdownHeading
      | MarkdownHeading[]
      | MarkdownHeading[][]
      | MarkdownHeading[][][]
      | MarkdownHeading[][][][]
    >;
