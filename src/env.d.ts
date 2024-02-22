/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare namespace App {

  interface Locals {
    session: string | undefined;
  }
}

interface ImportMetaEnv {
  readonly PRIVATE_PASSWORD: string;
  readonly PRIVATE_KEY: string;
  readonly PRIVATE_GITHUB_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}