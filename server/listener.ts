import { Server } from "http";
import Koa from "koa";

import { createApp } from "./app";

export const HTTP_PORT = +(process.env["PORT"] || 3000);

/**
 * Listens for HTTP requests on a given port
 */
export async function startHttpServer(app: Koa, port: number): Promise<Server> {
  return new Promise<Server>((resolve) => {
    const server = app.listen(port, () => {
      console.error(`Server started on port ${port}`);
      console.error(`Open in browser: http://localhost:${port}`);
      resolve(server);
    });
  });
}

/**
 * Starts the server
 */
export async function startServer(port: number): Promise<Server> {
  const app = await createApp();
  const server = startHttpServer(app, port);
  return server;
}
