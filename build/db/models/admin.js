"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const adminsSchema_1 = __importDefault(require("../schemas/users/adminsSchema"));
exports.default = (0, mongoose_1.model)('admin', adminsSchema_1.default);
