import { Request, Response } from "express";
import admin from "../../db/models/admin";
import bcrypt from "bcrypt";

export async function createAdmin(req: Request, res: Response): Promise<void>
{
    const newAdmin = new admin({
        fName: "Abdullah",
        lName: "Essam",
        email: "abdoessam.2010@gmail.com",
        password: await bcrypt.hash('boba', 2)
    })
    
    try {
        const doc = await newAdmin.save()
        res.send({
            success: true,
            ...doc
        })
    } catch(e: any) {
        res.status(500).send({
            success: false,
            message: e.message
        })
    }
}
