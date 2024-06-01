"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const node_path_1 = require("node:path");
// dotenv config
dotenv_1.default.config({
    path: (0, node_path_1.join)(__dirname, '..', '.env')
});
exports.default = dotenv_1.default;
