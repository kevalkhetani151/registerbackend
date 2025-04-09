import { users } from '../entity/user';

export interface IuserRepository {
  create(userData: users): Promise<users>;
  findall(): Promise<users[]>;
  findbyId(id: string): Promise<users>;
  update(id: string, data: Partial<users>): Promise<users>;
  delete(id: string): Promise<string>;
  findByEmail(email: string): Promise<users | null>;
}
