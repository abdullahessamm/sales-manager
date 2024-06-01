"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userDefinition_1 = __importDefault(require("./userDefinition"));
exports.default = Object.assign(Object.assign({}, userDefinition_1.default), { uname: String, password: String, active: Boolean });
