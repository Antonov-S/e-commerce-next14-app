"use server";

import { createSafeActionClient } from "next-safe-action";

import { LoginSchema } from "@/types/login-schema";
import { users } from "../schema";
import { db } from "..";
import { eq } from "drizzle-orm";

const action = createSafeActionClient();

export const emailSignIn = action(
  LoginSchema,
  async ({ email, password, code }) => {
    //Check if the user is in the database
    const existingUser = await db.query.users.findFirst({
      where: eq(users.email, email)
    });

    if (existingUser?.email !== email) {
      return { error: "User not found" };
    }

    // if (!existingUser.emailVerified) {
    //   return { error: "Email not verified" };
    // }

    return { success: email };
  }
);
