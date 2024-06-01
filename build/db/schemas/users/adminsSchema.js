"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const adminDefinition_1 = __importDefault(require("../../schemaDefinitions/users/adminDefinition"));
exports.default = new mongoose_1.Schema(adminDefinition_1.default, {
    timestamps: true
});
