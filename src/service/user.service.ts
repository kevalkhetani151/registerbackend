import { Loginuser, users } from '../domain/entity/user';
import userRepository from '../usecases/user.repository';
import { customeError } from '../utils/customeError';
import Encryptpassword from '../utils/Encryptpassword';
import JwtToken from '../utils/jwtfunction';

export class userServices {
  constructor(private userrepo: userRepository) {}
  async createUser(userData: users) {
    const isavilable = await this.userrepo.findByEmail(userData.email);
    if (isavilable) {
      throw new customeError('email address is already exist', 500);
    }
    const { password, salt } = Encryptpassword.Encryptpassword(
      userData.password,
    );
    const createUser = await this.userrepo.create({
      ...userData,
      password: password,
      salt: salt,
    });
    return createUser;
  }
  async loginuser(userData: Loginuser) {
    const existuser = await this.userrepo.findByEmail(userData.email);
    if (!existuser) {
      throw new customeError('email address is not register', 401);
    }
    const password = Encryptpassword.DeEncryptpassword(
      existuser.password,
      userData.password,
      existuser.salt,
    );
    if (!password) {
      throw new customeError('Invalid Creaditial', 401);
    }
    const jwtToken = JwtToken.createJwt(
      {
        id: existuser.id,
        user_id: existuser.user_id,
        name: existuser.name,
        email: existuser.email,
      },
      process.env.JWT_SECRET_KEY || '',
      {
        expiresIn: '1h',
      },
    );
    return {
      ...existuser,
      token: jwtToken,
    };
  }
}
