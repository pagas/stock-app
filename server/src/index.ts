import express from 'express';
import type { Request, Response } from 'express';

const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('API is running');
});

app.listen(port, () => {
    console.log('Server is running on port 5000');
});
