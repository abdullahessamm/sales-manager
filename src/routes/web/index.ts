import { Response, Request, Router } from "express";
import { join } from 'node:path';

const router = Router()

router.get('/', (req: Request, res: Response) => {
    res.status(200).sendFile(join(__dirname, '..', '..', '..', 'public', 'index.html'))
})

export default router;
