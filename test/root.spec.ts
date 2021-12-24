import { Server } from "http";

import { closeNext } from "../server/app";
import { HTTP_PORT, startServer } from "../server/listener";

let server: Server;

before(async () => {
  server = await startServer(HTTP_PORT);
});

after(async () => {
  console.log("Closing test server");
  server.close();
  await closeNext();
});
