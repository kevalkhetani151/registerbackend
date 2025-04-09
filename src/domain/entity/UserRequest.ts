import { JwtPayload } from 'jsonwebtoken';
import { Request } from 'express';
interface User extends JwtPayload {
  id: string;
  user_id: number;
  name: string;
  email: string;
}

interface UserRequest extends Request {
  user?: User;
}

export default UserRequest;
