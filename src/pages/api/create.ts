import type { APIRoute } from "astro";

export const POST: APIRoute = async function({ request }) {
  const formData = await request.formData();

  const title = formData.get("title");
  const desc = formData.get("desc");

  const content =
`---
title: ${title}
desc: ${desc}
pubon: ${new Date().toISOString()}
---

## Created by REQUEST
`

  const headers = new Headers({
    "Content-Disposition": `attachment; filename=download.txt`,
    "Content-Type": "text/plain; charset=utf-8"
  });
  const response = new Response(content, { headers });
  
  return response;
}
