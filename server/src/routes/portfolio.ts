import { Router } from 'express';
import type { Request, Response } from 'express';
import type { Stock } from '../types/Stock.js';


const router: Router = Router();

let portfolio: Stock[] = [{ symbol: 'AAPL', quantity: 10, buyPrice: 100 }];

router.get('/', (req: Request, res: Response) => {
    res.json(portfolio);
});

router.post('/', (req: Request, res: Response) => {
    const stock: Stock = req.body;

    // basic validation 
    if (!stock.symbol || !stock.quantity || !stock.buyPrice) {
        return res.status(400).json({ error: 'Missing required fields' });
    }
    
    portfolio.push(stock);
    res.json(stock);
});

export default router;