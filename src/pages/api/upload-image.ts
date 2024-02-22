import type { APIRoute } from "astro";
import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
  auth: import.meta.env.PRIVATE_GITHUB_TOKEN
})

const log = (s: any) => console.log("### Octokit Bot:\n" + s);

export const POST: APIRoute = async function (context) {

  const img = await context.request.text();
  const [file, data] = img.split("rishavmandal");

  const owner = "rishavxyz";
  const repo = "portfolio-v2";
  const path = "src/media";
  const content = data.replace(/data.+,/, "");

  return new Response(JSON.stringify({
    message: `"${file}" uploaded to ${path}`, type: "image",
    success: true, text: "", fileName: file
  }));

  try {
    const response = await octokit.repos.getContent({
      owner, repo, path: [path, file].join("/")
    }) as {
      status: number; data: { sha: string; }
    };
    if (response.status == 200) {
      log(`${file} already exists! So updating it`);

      const updateFile = await uploadOrUpdateFile({
        owner, repo, path, file, content,
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
        owner, repo, path, file, content
      });

      log(`${file} uploaded`);
      console.log(uploadFile.data.download_url);
    }
  }
  return new Response(JSON.stringify({ message: "Image uploaded", type: "image",
    success: true, text: content, fileName: file
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
    sha, content
  });
  return response;
}
