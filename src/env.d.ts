/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

import type { User } from "@supabase/supabase-js";

declare namespace App {
  interface Locals {
    session: string | undefined;
    user: User | null;
  }
}

interface ImportMetaEnv {
  readonly PRIVATE_PASSWORD: string;
  readonly PRIVATE_KEY: string;
  readonly PRIVATE_GITHUB_TOKEN: string;
  readonly PRIVATE_SUPABASE_URL: string;
  readonly PRIVATE_SUPABASE_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}