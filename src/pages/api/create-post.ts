import type { APIRoute } from "astro";
import { Octokit } from "@octokit/rest";
import { Buffer } from "node:buffer";

const octokit = new Octokit({
  auth: import.meta.env.PRIVATE_GITHUB_TOKEN
})

const log = (s: any) => console.log("### Octokit Bot:\n" + s);

export const POST: APIRoute = async function (context) {

  const formData = await context.request.formData();

  const title    = String(formData.get("title")).trim();
  const fileName = String(formData.get("fileName")).trim();
  const desc     = String(formData.get("desc")).trim();
  const content  = String(formData.get("content")).trim();
  const isDraft  = !!formData.get("draft");

  const date = new Date().toLocaleDateString("en-us", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const text = [
    `---`,
    `title: ${title.replaceAll(/"/g, '\\"')}`,
    `desc: ${desc.replaceAll(/"/g, '\\"')}`,
    `pubon: ${date}`,
    `draft: ${isDraft}`,
    `---`,
    `\n${content}`
  ]
  .join("\n");

  const owner = "rishavxyz";
  const repo = "portfolio-v2";
  const path = "src/content/blog";
  const file = fileName.concat(".mdx");

  try {
    const response = await octokit.repos.getContent({
      owner, repo, path: [path, file].join("/")
    }) as {
      status: number; data: { sha: string; }
    };
    if (response.status == 200) {
      log(`${file} already exists! So updating it`);

      const updateFile = await uploadOrUpdateFile({
        owner, repo, path, file, content: text,
        sha: response.data.sha
      });
      
      log(`${file} updated`);
      console.log(updateFile);
    }
  }
  catch(e: unknown) {
    const error = e as {
      status: number;
    };
    if (error.status == 404) {
      log(`${file} not found! So uploading it`);

      const uploadFile = await uploadOrUpdateFile({
        owner, repo, path, file, content: text
      });

      log(`${file} uploaded`);
      console.log(uploadFile);
    }
  }

  return new Response(JSON.stringify({ message: "New post created successfully", type: "post",
    success: true, text, fileName
  }));
}

async function uploadOrUpdateFile({
  owner, repo, path, file, content, 
  sha = undefined, message = undefined
}: {
  owner: string; repo: string; path: string;
  file: string; content: string; sha?: string; message?: string;
}) {
  const response = await octokit.repos.createOrUpdateFileContents({
    owner, repo, path: [path, file].join("/"),
    message: message ?? `OctokitBot: ${sha ? 'Update' : 'Upload'} ${file}`,
    sha, content: Buffer.from(content).toString("base64")
  });
  
  return response;
}