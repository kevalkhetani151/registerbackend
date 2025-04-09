import express, { Request, Response, NextFunction } from 'express';
import env from 'dotenv';
import { errorHandler } from './middleware/errorHandler';
import { userRouter } from './routes/user.route';
import verifyToken from './middleware/auth.middleware';

env.config();

const app = express();
const PORT = process.env.PORT || 3005;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get(
  '/',
  verifyToken,
  (req: Request, resp: Response, next: NextFunction) => {
    resp.json({
      data: 'server is up and running',
    });
  },
);
app.use('/user', userRouter);
app.use(errorHandler);

app.listen(PORT, () => console.log(`server is running on ${PORT}`));
