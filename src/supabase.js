import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://dveltlharamrbebpngev.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2ZWx0bGhhcmFtcmJlYnBuZ2V2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY0NzE0MzksImV4cCI6MjAwMjA0NzQzOX0.1_poGLVuXa0CvFgcBMMdr41M0ikc1AjqRQhPBol5fqQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
