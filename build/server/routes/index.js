"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("@koa/router"));
const API_BASE = `/api/v1`;
function default_1(app) {
    const router = new router_1.default({
        prefix: API_BASE,
    });
    router.get("/", (ctx) => {
        ctx.body = "Welcome to API!";
    });
    app.use(router.routes()).use(router.allowedMethods());
}
exports.default = default_1;
