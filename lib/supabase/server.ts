import { createClient } from "@supabase/supabase-js"

export const createServerSupabaseClient = () => {
  // Replace with your actual Supabase URL and service role key
  const supabaseUrl = process.env.SUPABASE_URL || ""
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ""

  return createClient(supabaseUrl, supabaseServiceKey)
}
