import { Express } from "express";
import adminsRoutes from './api/adminsRoutes';
import webRoutes from './web'

export function mountWebRoutes(app: Express) {
    app.use('/', webRoutes)
}

export function mountApiRoutes(app: Express) {
    app.use('/api/v1/admins', adminsRoutes)
}