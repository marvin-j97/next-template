"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timer = void 0;
class Timer {
    constructor() {
        this.start = +new Date();
    }
    reset() {
        this.start = +new Date();
    }
    asMilli() {
        return Date.now() - this.start;
    }
    asSeconds() {
        return this.asMilli() / 1000;
    }
}
exports.Timer = Timer;
