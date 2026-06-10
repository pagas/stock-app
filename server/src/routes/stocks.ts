import { Router } from 'express';
import type { Request, Response } from 'express';
import { getStockPrice } from '../services/stockService.js';

const router: Router = Router();

router.get('/:symbol', async (req: Request<{ symbol: string }>, res: Response) => {
    try {
        const symbol = req.params.symbol;
        const price = await getStockPrice(symbol);
        res.json(price);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch stock price' });
    }
});

export default router;