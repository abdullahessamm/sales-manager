import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { mountApiRoutes, mountWebRoutes } from './routes';
import { join } from 'node:path';
import { createServer } from 'node:http';
import { Server } from 'socket.io';
import connection from './db/connection';

// dotenv config
dotenv.config({
    path: join(__dirname, '..', '.env')
});

// server init
const app = express();
const server = createServer(app)
const io = new Server(server)


// start morgan logger
process.env.APP_ENV === "development" && app.use(morgan("dev"))

// parse json requests
app.use(express.json())

console.log("starting server...");

(async () => {
    // database connection
    await connection()

    // mount routs
    mountWebRoutes(app)
    mountApiRoutes(app)

    // handle socket connections
    io.on('connection', socket => {
        socket.on('message', msg => {
            io.emit('message', msg)
        })
    })

    // start server
    server.listen(process.env.PORT || 8000, () => {
        console.log(`> Server started at http://localhost:${process.env.PORT || 8000}`)
    })
})()
