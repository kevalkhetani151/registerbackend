export interface users {
  id: string;
  user_id: number;
  name: string;
  email: string;
  password: string;
  salt: string;
  phone?: string | null;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}

export interface Loginuser {
  email: string;
  password: string;
}
