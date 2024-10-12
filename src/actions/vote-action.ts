"use server";

import { redis } from "@/lib/redis";
import { headers } from "next/headers";
import { z } from "zod";
import { actionClient } from "./safe-action";

export const voteAction = actionClient
  .schema(
    z.object({
      slug: z.string(),
    }),
  )
  .action(async ({ parsedInput: { slug } }) => {
    const clientIP = headers().get("x-forwarded-for");

    const hasVoted = await redis.sadd(`tool:${slug}:ip:${clientIP}`, true);

    if (!hasVoted) {
      throw new Error("You have already voted");
    }

    await redis.incr(`tool:${slug}`);
  });
