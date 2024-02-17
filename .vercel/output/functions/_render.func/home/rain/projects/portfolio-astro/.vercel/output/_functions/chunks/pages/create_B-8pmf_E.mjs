const POST = async function({ request }) {
  const formData = await request.formData();
  console.log(await request.body);
  const title = formData.get("title");
  const desc = formData.get("desc");
  const content = `---
title: ${title}
desc: ${desc}
pubon: ${(/* @__PURE__ */ new Date()).toISOString()}
---

## Created by REQUEST
`;
  const headers = new Headers({
    "Content-Disposition": `attachment; filename=download.txt`,
    "Content-Type": "text/plain; charset=utf-8"
  });
  const response = new Response(content, { headers });
  return response;
};

export { POST };
