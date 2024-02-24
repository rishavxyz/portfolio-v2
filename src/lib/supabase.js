import { createClient } from "@supabase/supabase-js"
export const supabase = createClient(
  import.meta.env.PRIVATE_SUPABASE_URL, import.meta.env.PRIVATE_SUPABASE_KEY
);