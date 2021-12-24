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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = exports.closeNext = void 0;
const koa_1 = __importDefault(require("koa"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const next_1 = __importDefault(require("next"));
const http_logger_1 = require("./middleware/http_logger");
const index_1 = __importDefault(require("./routes/index"));
const env_1 = require("./util/env");
let closeNext = () => __awaiter(void 0, void 0, void 0, function* () {
    console.error("Next renderer not initiated, tried to close");
});
exports.closeNext = closeNext;
function createApp() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = new koa_1.default();
        app.use((0, koa_bodyparser_1.default)());
        app.use(http_logger_1.httpLogger);
        (0, index_1.default)(app);
        console.error("Preparing Next");
        const nextRenderer = (0, next_1.default)({ dev: (0, env_1.environment)() !== "production" });
        const nextHandler = nextRenderer.getRequestHandler();
        yield nextRenderer.prepare();
        exports.closeNext = () => nextRenderer.close();
        app.use((ctx) => __awaiter(this, void 0, void 0, function* () {
            yield nextHandler(ctx.req, ctx.res);
        }));
        return app;
    });
}
exports.createApp = createApp;
