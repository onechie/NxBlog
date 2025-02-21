"use server";

import { createClient } from "@/utils/supabase/server";

export async function login(prevState: unknown, formData: FormData) {
  const supabase = await createClient();
  
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) return { success: false, message: error.message };
  return { success: true, message: "You are now successfully logged in!" };
}
