"use server";

import { signIn } from "@/auth";

export const signInAction = async (formdata) => {
  console.log("form data", formdata);
  await signIn("credentials", {
    email: formdata.get("email"),
    password: formdata.get("password"),
    redirectTo: "/",
  });
};
