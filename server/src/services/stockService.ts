import axios from 'axios';

export const getStockPrice = async (symbol: string) => {
    const apiKey = process.env.FINNHUB_API_KEY;

    if (!apiKey) {
        throw new Error('FINNHUB_API_KEY is not set in environment variables');
    }

    const response = await axios.get(
        `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apiKey}`
    );

    const data = response.data;

    if (data.c === 0) {
        throw new Error(`No data found for symbol: ${symbol}`);
    }

    return {
        symbol: symbol.toUpperCase(),
        price: data.c,        // current price
        change: data.d,       // change
        changePercent: data.dp, // change percent
        high: data.h,         // high of the day
        low: data.l,          // low of the day
        open: data.o,         // open price
    };
};