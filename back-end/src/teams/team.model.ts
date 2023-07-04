import * as mongoose from 'mongoose';

export const TeamSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    msg: { type: String, required: true },
    owner: { type: mongoose.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true },
);

export interface Team extends mongoose.Document {
  title: string;
  msg: string;
  owner: string;
}
