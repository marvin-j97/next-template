import Router from "@koa/router";
import Koa from "koa";

const API_BASE = `/api/v1`;

/**
 * API router
 */
export default function (app: Koa): void {
  const router = new Router({
    prefix: API_BASE,
  });

  router.get("/", (ctx) => {
    ctx.body = "Welcome to API!";
  });

  // TODO: add sub routers here
  // router.use(subRouter.routes(), subRouter.allowedMethods());

  app.use(router.routes()).use(router.allowedMethods());
}
