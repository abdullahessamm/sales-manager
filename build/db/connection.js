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
const mongoose_1 = require("mongoose");
// database connection
function default_1() {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        try {
            const connection = yield (0, mongoose_1.connect)((_a = process.env.DB_CONN_STRING) !== null && _a !== void 0 ? _a : 'mongodb://127.0.0.1:27017/realtime_pos');
            console.log('> database connected');
            return connection;
        }
        catch (e) {
            console.error("> database connection error");
            process.exit(1);
        }
    });
}
exports.default = default_1;
