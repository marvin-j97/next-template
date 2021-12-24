"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = exports.startHttpServer = exports.HTTP_PORT = void 0;
const app_1 = require("./app");
exports.HTTP_PORT = +(process.env["PORT"] || 3000);
function startHttpServer(app, port) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            const server = app.listen(port, () => {
                console.error(`Server started on port ${port}`);
                console.error(`Open in browser: http://localhost:${port}`);
                resolve(server);
            });
        });
    });
}
exports.startHttpServer = startHttpServer;
function startServer(port) {
    return __awaiter(this, void 0, void 0, function* () {
        const app = yield (0, app_1.createApp)();
        const server = startHttpServer(app, port);
        return server;
    });
}
exports.startServer = startServer;
