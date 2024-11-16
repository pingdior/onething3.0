import { MongoClient, Db } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

class Database {
  private static instance: Database;
  private client: MongoClient;
  private _db: Db | null = null;

  private constructor() {
    const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/chatapp';
    this.client = new MongoClient(uri);
  }

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  public async connect(): Promise<void> {
    try {
      await this.client.connect();
      this._db = this.client.db();
      console.log('Successfully connected to MongoDB.');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      process.exit(1);
    }
  }

  public get db(): Db {
    if (!this._db) {
      throw new Error('Database not initialized. Call connect() first.');
    }
    return this._db;
  }
}

export const database = Database.getInstance();
export const db = database.db; 