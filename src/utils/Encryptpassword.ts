import * as crypto from 'crypto';

export default class Encryptpassword {
  static Encryptpassword(password: string) {
    const salt = crypto.randomBytes(32).toString('hex');
    const genHash = crypto
      .pbkdf2Sync(password, salt, 10000, 64, 'sha512')
      .toString('hex');
    return {
      salt,
      password: genHash,
    };
  }
  static DeEncryptpassword(
    password: string,
    loginpassword: string,
    salt: string,
  ) {
    const password2 = crypto
      .pbkdf2Sync(loginpassword, salt, 10000, 64, 'sha512')
      .toString('hex');
    if (password2 == password) {
      return true;
    }
    return false;
  }
}
