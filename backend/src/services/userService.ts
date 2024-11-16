import { Collection } from 'mongodb';
import { db } from '../config/database';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export class UserService {
  private collection: Collection;

  constructor() {
    this.collection = db.collection('users');
  }

  async findById(userId: string) {
    return await this.collection.findOne({ user_id: userId });
  }

  async login(email: string, password: string) {
    const user = await this.collection.findOne({ email });
    if (!user) {
      throw new Error('User not found');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error('Invalid credentials');
    }

    const token = jwt.sign(
      { userId: user.user_id },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '24h' }
    );

    return { user, token };
  }
} 