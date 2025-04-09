import { Response, Request, NextFunction, Router } from 'express';
import userController from '../controller/user.controller';

const route = Router();

const usercontroller = new userController();
route.post('/signup', (req: Request, resp: Response, next: NextFunction) =>
  usercontroller.Register(req, resp, next),
);
route.post('/login', (req: Request, resp: Response, next: NextFunction) =>
  usercontroller.Login(req, resp, next),
);

export { route as userRouter };
