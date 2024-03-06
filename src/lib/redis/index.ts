import { Redis } from "@upstash/redis";

export const redis = new Redis({
  url: "https://apn1-clever-bluejay-34726.upstash.io",
  token: process.env.REDIS_KEY!,
});
