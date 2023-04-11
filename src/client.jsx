import { createClient } from "@supabase/supabase-js";
const URL = "https://thhybirxozjngzoqyllz.supabase.co";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRoaHliaXJ4b3pqbmd6b3F5bGx6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA4MjQ0OTEsImV4cCI6MTk5NjQwMDQ5MX0.L0tAJKeXeAaBscD4dfHA35pTWUAXFvqL12E28D15Cgs";
export const supabase = createClient(URL, API_KEY);
