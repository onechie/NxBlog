"use server";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function publishBlog(prevState: unknown, formData: FormData) {
  const supabase = createClient();
  const {
    data: { user },
  } = await (await supabase).auth.getUser();
  if (!user?.id)
    return {
      success: false,
      message: "You are not authenticated.",
    };

  const { error } = await (
    await supabase
  )
    .from("blogs")
    .insert([
      {
        title: formData.get("title") as string,
        content: formData.get("content") as string,
        user_id: user.id,
      },
    ])
    .select();

  if (error)
    return {
      success: false,
      message: error.message,
    };
  revalidatePath("/dashboard");
  return {
    success: true,
    message: "Blog published successfully.",
  };
}

export async function fetchPublicBlogs() {
  const supabase = createClient();
  const { data: blogs, error } = await (await supabase)
    .from("blogs")
    .select("id, title, content, created_at, updated_at, authors(display_name)")
    .order("created_at", { ascending: false });
  if (error)
    return {
      success: false,
      message: error.message,
      blogs: [],
    };
  return {
    success: true,
    message: "Blog fetched successfully.",
    blogs: blogs,
  };
}

export async function fetchUserBlogs() {
  const supabase = createClient();
  const {
    data: { user },
  } = await (await supabase).auth.getUser();
  if (!user?.id)
    return {
      success: false,
      message: "You are not authorized",
      blogs: [],
    };

  const { data: blogs, error } = await (await supabase)
    .from("blogs")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  if (error)
    return {
      success: false,
      message: error.message,
      blogs: [],
    };
  return {
    success: true,
    message: "Blog fetched successfully.",
    blogs: blogs,
  };
}

export async function updateBlog(prevState: unknown, formData: FormData) {
  const supabase = createClient();
  const {
    data: { user },
  } = await (await supabase).auth.getUser();
  if (!user?.id)
    return {
      success: false,
      message: "You are not authenticated.",
      blog: {},
    };

  const { data, error } = await (
    await supabase
  )
    .from("blogs")
    .update({ title: formData.get("title"), content: formData.get("content") })
    .eq("id", formData.get("id"))
    .eq("user_id", user.id)
    .select();

  if (error)
    return {
      success: false,
      message: error.message,
      blog: {},
    };
  revalidatePath("/dashboard");
  return {
    success: true,
    message: "Blog updated successfully.",
    blog: data[0],
  };
}

export async function deleteBlog(blogId: string) {
  const supabase = createClient();
  const {
    data: { user },
  } = await (await supabase).auth.getUser();
  if (!user?.id)
    return {
      success: false,
      message: "You are not authenticated.",
    };
  const { error } = await (await supabase)
    .from("blogs")
    .delete()
    .eq("id", blogId)
    .eq("user_id", user.id);

  if (error)
    return {
      success: false,
      message: error.message,
    };
  revalidatePath("/dashboard");
  return {
    success: true,
    message: "Blog deleted successfully.",
  };
}
