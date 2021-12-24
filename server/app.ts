import Koa from "koa";
import bodyparser from "koa-bodyparser";
import next from "next";

import { httpLogger } from "./middleware/http_logger";
import mountApiRouter from "./routes/index";
import { environment } from "./util/env";

export let closeNext = async (): Promise<void> => {
  console.error("Next renderer not initiated, tried to close");
};

export async function createApp(): Promise<Koa> {
  const app = new Koa();

  app.use(bodyparser());
  app.use(httpLogger);

  mountApiRouter(app);

  // Start Next server
  console.error("Preparing Next");
  const nextRenderer = next({ dev: environment() !== "production" });
  const nextHandler = nextRenderer.getRequestHandler();
  await nextRenderer.prepare();
  closeNext = () => nextRenderer.close();

  // Serve all other routes with Next
  // Next will also serve as error handler (404 etc.)
  app.use(async (ctx) => {
    await nextHandler(ctx.req, ctx.res);
  });

  return app;
}
