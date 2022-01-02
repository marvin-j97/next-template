import { Context, Next } from "koa";

import { Timer } from "../util/timer";

/**
 * Simple HTTP logger
 */
export async function httpLogger(ctx: Context, next: Next): Promise<void> {
  if (ctx.originalUrl.includes("_next")) {
    return await next();
  }

  const timer = new Timer();

  const requestBodySize = ctx.get("content-length") || 0;
  console.error(
    `${new Date().toISOString()} | <- ${ctx.method} ${ctx.originalUrl} - ${requestBodySize} bytes`,
  );

  await next();

  const milli = timer.asMilli();
  const bytes = ctx.res.getHeader("content-length") || 0;
  console.error(`${new Date().toISOString()} | -> ${ctx.status} - ${bytes} bytes - ${milli} ms`);
}
