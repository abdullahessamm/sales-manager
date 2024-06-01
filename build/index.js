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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
const routes_1 = require("./routes");
const node_path_1 = require("node:path");
const node_http_1 = require("node:http");
const socket_io_1 = require("socket.io");
const connection_1 = __importDefault(require("./db/connection"));
// dotenv config
dotenv_1.default.config({
    path: (0, node_path_1.join)(__dirname, '..', '.env')
});
// server init
const app = (0, express_1.default)();
const server = (0, node_http_1.createServer)(app);
const io = new socket_io_1.Server(server);
// start morgan logger
process.env.APP_ENV === "development" && app.use((0, morgan_1.default)("dev"));
// parse json requests
app.use(express_1.default.json());
console.log("starting server...");
(() => __awaiter(void 0, void 0, void 0, function* () {
    // database connection
    yield (0, connection_1.default)();
    // mount routs
    (0, routes_1.mountWebRoutes)(app);
    (0, routes_1.mountApiRoutes)(app);
    // handle socket connections
    io.on('connection', socket => {
        socket.on('message', msg => {
            io.emit('message', msg);
        });
    });
    // start server
    server.listen(process.env.PORT || 8000, () => {
        console.log(`> Server started at http://localhost:${process.env.PORT || 8000}`);
    });
}))();
