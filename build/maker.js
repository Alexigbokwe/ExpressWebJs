"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const index_1 = (0, tslib_1.__importDefault)(require("./Command/index"));
const Kernel_1 = (0, tslib_1.__importDefault)(require("./App/Console/Kernel"));
const maker_console_ts_1 = (0, tslib_1.__importDefault)(require("maker-console-ts"));
/*
|--------------------------------------------------------------------------
| Run The Maker Application
|--------------------------------------------------------------------------
|
| When we run the console application, the current CLI command will be
| executed in this console and the response sent back to a terminal
|
*/
maker_console_ts_1.default.run(index_1.default, Kernel_1.default);
