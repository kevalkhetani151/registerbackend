import { prisma } from '../config/db.config';
import { users } from '../domain/entity/user';
import { IuserRepository } from '../domain/repository/userRepository';
import { customeError } from '../utils/customeError';

class userRepository implements IuserRepository {
  async create(userData: users): Promise<users> {
    return await prisma.user.create({
      data: userData,
    });
  }
  findall(): Promise<users[]> {
    throw new customeError('Method not implemented.', 404);
  }
  findbyId(id: string): Promise<users> {
    throw new customeError('Method not implemented.', 404);
  }
  update(id: string, data: Partial<users>): Promise<users> {
    throw new customeError('Method not implemented.', 404);
  }
  delete(id: string): Promise<string> {
    throw new customeError('Method not implemented.', 404);
  }
  async findByEmail(email: string): Promise<users | null> {
    return await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
  }
}

export default userRepository;
