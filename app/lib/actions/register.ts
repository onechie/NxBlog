"use server";

// import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export async function register(prevState: unknown, formData: FormData) {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    options: {
      data: {
        display_name: formData.get("full_name") as string,
      },
    },
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) return { success: false, message: error.message };
  return { success: true, message: "You are now successfully registered!" };
}
