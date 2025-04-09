import { NextFunction, Request, Response } from 'express';
import { DIcontainer } from '../DIcontainer';
import { sucessResponce } from '../utils/responce';
import { customeError } from '../utils/customeError';
import _ from 'lodash';

class userController {
  private _usercontroller = DIcontainer.getAllusecases();
  async Register(req: Request, resp: Response, next: NextFunction) {
    try {
      const user = await this._usercontroller.createUser(req.body);
      return sucessResponce(
        resp,
        'user register successfully',
        _.omit(user, ['salt', 'password']),
      );
    } catch (err) {
      next(
        err instanceof customeError
          ? err
          : new customeError('An unexpected error occurred', 500),
      );
    }
  }
  async Login(req: Request, resp: Response, next: NextFunction) {
    try {
      const user = await this._usercontroller.loginuser(req.body);
      return sucessResponce(
        resp,
        'user login sucessfullly',
        _.omit(user, ['password', 'salt']),
      );
    } catch (err) {
      next(
        err instanceof customeError
          ? err
          : new customeError('internel server error', 500),
      );
    }
  }
}
export default userController;
