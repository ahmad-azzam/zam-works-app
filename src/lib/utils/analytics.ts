import { TAnalyticArgs, TAnalyticPromise, TTrackOptions } from "@/@types";
import { redis } from "../redis";
import { dateUtil } from "./date";
import { parse } from "date-fns";

export class AnalyticsUtil {
  private retention: number = 60 * 60 * 24 * 7;

  constructor(opts?: TAnalyticArgs) {
    if (opts?.retention) this.retention = opts.retention;
  }

  async track(namespace: string, event: object = {}, opts?: TTrackOptions) {
    let key = `analytics::${namespace}`;

    if (!opts?.persist) {
      key += `::${dateUtil.getDate()}`;
    }
    await redis.hincrby(key, JSON.stringify(event), 1);
    if (!opts?.persist) await redis.expire(key, this.retention);
  }

  async retrieve(namespace: string, date: string) {
    const res = await redis.hgetall<Record<string, string>>(
      `analytics::${namespace}::${date}`
    );

    return {
      date,
      values: Object.entries(res ?? []).map(([key, value]) => ({
        [key]: Number(value),
      })),
    };
  }

  async retrieveDays(namespace: string, nDays: number) {
    const promises: TAnalyticPromise[] = [];

    for (let index = 0; index < nDays; index++) {
      const formattedDate = dateUtil.getDate(index);
      const promise = this.retrieve(namespace, formattedDate);
      promises.push(promise);
    }

    const fetched = await Promise.all(promises);

    const data = fetched.sort((a, b) => {
      const aParse = parse(a.date, "dd/MM/yyyy", new Date());
      const bParse = parse(b.date, "dd/MM/yyyy", new Date());

      if (aParse > bParse) return 1;

      return -1;
    });

    return data;
  }
}

export const analyticsUtil = new AnalyticsUtil();
