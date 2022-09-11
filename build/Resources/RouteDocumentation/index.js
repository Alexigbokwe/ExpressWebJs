"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ApiDocumentation_1 = require("Elucidate/Documentation/ApiDocumentation");
const DefaultRoute_1 = (0, tslib_1.__importDefault)(require("./Docs/DefaultRoute"));
let endpointCollections = [DefaultRoute_1.default];
exports.default = ApiDocumentation_1.ApiDocumentation.loadEndpoints(endpointCollections);
