
import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  // id: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

export interface User extends mongoose.Document {
  username: string;
  email: string;
  password: string;
}
