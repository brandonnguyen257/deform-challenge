import { createClient } from "@supabase/supabase-js";
import { TestModel } from "../model/TestModel";

const supabase = createClient(
  process?.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
);

export const getTestData = async (pageId: number) => {
  const { data: pageData } = await supabase
    .from("test")
    .select()
    .eq("page_id", pageId)
    .maybeSingle();
  return pageData as TestModel;
};

export const insertTestData = async (data: TestModel) => {
  const { error } = await supabase.from("test").insert([data]);

  if (error) {
    console.error("Error inserting data: ", error);
  } else {
    console.log("Data inserted successfully");
  }
};
