import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "";

// Helper to determine if actual Supabase API credentials have been provided
export const isSupabaseConfigured = 
  Boolean(supabaseUrl) && 
  supabaseUrl !== "https://your-supabase-url.supabase.co" && 
  Boolean(supabaseAnonKey) && 
  supabaseAnonKey !== "your-supabase-anon-key-here";

// Initialize client with placeholders if not configured to prevent crashes during builds
export const supabase = createClient(
  isSupabaseConfigured ? supabaseUrl : "https://placeholder-project.supabase.co",
  isSupabaseConfigured ? supabaseAnonKey : "placeholder-anon-key"
);
