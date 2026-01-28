import  type { Request, Response } from 'express';
import express from 'express'
const app = express();
const PORT: number = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Express!');
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
