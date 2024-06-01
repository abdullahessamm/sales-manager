"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mountApiRoutes = exports.mountWebRoutes = void 0;
const adminsRoutes_1 = __importDefault(require("./api/adminsRoutes"));
const web_1 = __importDefault(require("./web"));
function mountWebRoutes(app) {
    app.use('/', web_1.default);
}
exports.mountWebRoutes = mountWebRoutes;
function mountApiRoutes(app) {
    app.use('/api/v1/admins', adminsRoutes_1.default);
}
exports.mountApiRoutes = mountApiRoutes;
