import { analyticsUtil } from "@/lib/utils/analytics";

type TAnalyticArgs = { retention: number };

type TTrackOptions = { persist?: boolean };

type TAnalyticPromise = ReturnType<typeof analyticsUtil.retrieve>;

export { type TAnalyticArgs, type TTrackOptions, type TAnalyticPromise };
