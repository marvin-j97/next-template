import "mocha";

import { expect } from "chai";
import http from "http";

import { HTTP_PORT } from "../server/listener";

describe("Server tests", () => {
  it("Should serve API ", async () => {
    const { response, body } = await new Promise<{ response: http.IncomingMessage; body: string }>(
      (resolve) => {
        let body = "";

        http.get(
          {
            hostname: "localhost",
            port: HTTP_PORT,
            path: "/api/v1",
          },
          (response) => {
            response.on("data", function (chunk) {
              body += chunk;
            });
            response.on("end", () => resolve({ response, body }));
          },
        );
      },
    );

    expect(response.statusCode).to.equal(200);
    expect(body).to.include("Welcome to API!");
  });
});
