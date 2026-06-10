

import type { Stock } from "../types/Stock.js";
import { getStockPrice } from "../services/stockService.js";

export const getPortfolioValue = async (portfolio: Stock[]) => {
    const result = await Promise.all(
        portfolio.map(async (stock) => {
            const metaData = await getStockPrice(stock.symbol);
            const totalValue = stock.quantity * metaData.price;
            const cost = stock.buyPrice * stock.quantity;
            const profit = totalValue - cost;
            const profitPercentage = (profit / cost) * 100;
            
            return {
                ...stock,
                currentPrice: metaData.price,
                totalValue,
                cost,
                profit,
                profitPercentage: +profitPercentage.toFixed(2)
            };
        })
    )
    
    return result;
}

