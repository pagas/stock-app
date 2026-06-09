import { Router } from 'express';
import type { Request, Response } from 'express';

const router: Router = Router();

let portfolio: any[] = [{ symbol: 'AAPL', quantity: 10 }];

router.get('/', (req: Request, res: Response) => {
    res.json(portfolio);
});

router.post('/', (req: Request, res: Response) => {
    const stock = req.body;
    portfolio.push(stock)
    res.json(stock);
});

export default router;