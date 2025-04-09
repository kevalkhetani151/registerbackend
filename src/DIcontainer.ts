import { userServices } from './service/user.service';
import userRepository from './usecases/user.repository';

export class DIcontainer {
  private static _userRepo = new userRepository();
  static getalluserRepo() {
    return this._userRepo;
  }
  static getAllusecases() {
    return new userServices(this.getalluserRepo());
  }
}
