import { Router } from 'express';
import type { Request, Response } from 'express';

const router: Router = Router();

router.post('/portfolio', (req: Request, res: Response) => {
    const { symbol, quantity } = req.body;
    res.json({ message: 'Stock added to portfolio', symbol, quantity });
});

export default router;