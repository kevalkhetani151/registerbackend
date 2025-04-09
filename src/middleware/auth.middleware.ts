import UserRequest from '../domain/entity/UserRequest';
import { Response, NextFunction } from 'express';
import { customeError } from '../utils/customeError';
import jwt from 'jsonwebtoken';
import { users } from '../domain/entity/user';

export default function verifyToken(
  req: UserRequest,
  res: Response,
  next: NextFunction,
): void {
  try {
    const token = req.header('Authorization')?.split(' ')[1];
    console.log(token);

    if (!token) {
      return next(new customeError('Token is not found', 401));
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET_KEY as string,
    ) as users;

    req.user = decoded;

    next();
  } catch (err) {
    next(
      err instanceof jwt.JsonWebTokenError
        ? new customeError(
            'Invalid or expired token. Please log in again.',
            401,
          )
        : new customeError('An unexpected error occurred', 500),
    );
  }
}
