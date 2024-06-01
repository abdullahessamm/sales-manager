import { Router } from "express";
import { join } from 'node:path';
import { createAdmin } from "../../http/services/adminService";

const router = Router()

router.get('/', (req, res) => {
    res.send([
        {
            name: "abdullah"
        }
    ]);
})

router.post('/', createAdmin)

export default router;
