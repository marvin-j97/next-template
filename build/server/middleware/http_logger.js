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
exports.httpLogger = void 0;
const timer_1 = require("../util/timer");
function httpLogger(ctx, next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (ctx.originalUrl.includes("_next")) {
            return yield next();
        }
        const timer = new timer_1.Timer();
        const requestBodySize = ctx.get("content-length") || 0;
        console.error(`${new Date().toISOString()} | <- ${ctx.method} ${ctx.originalUrl} - ${requestBodySize} bytes`);
        yield next();
        const milli = timer.asMilli();
        const bytes = ctx.res.getHeader("content-length") || 0;
        console.error(`${new Date().toISOString()} | -> ${ctx.status} - ${bytes} bytes - ${milli} ms`);
    });
}
exports.httpLogger = httpLogger;
