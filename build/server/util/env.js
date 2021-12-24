"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTest = exports.isDevelopment = exports.environment = void 0;
function environment() {
    return (process.env.NODE_ENV || "undefined_env").trim();
}
exports.environment = environment;
const isDevelopment = () => environment() === "development";
exports.isDevelopment = isDevelopment;
const isTest = () => environment() === "test";
exports.isTest = isTest;
