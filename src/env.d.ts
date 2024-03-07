/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

import type { Session, User } from 'lucia';

// declare namespace App {
//   interface Locals {
//     user: User | null;
//     // This does not work :,(
//   }
// }

declare global {
  namespace App {
    interface Locals {
      session: Session | null;
      user: User | null;
    }
  }
}

interface ImportMetaEnv {
  readonly PRIVATE_GITHUB_TOKEN: string;
  readonly PRIVATE_SUPABASE_URL: string;
  readonly PRIVATE_SUPABASE_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
