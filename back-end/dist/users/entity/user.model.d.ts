import * as mongoose from 'mongoose';
export declare const UserSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    username: string;
    email: string;
    password: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    username: string;
    email: string;
    password: string;
}>> & Omit<mongoose.FlatRecord<{
    username: string;
    email: string;
    password: string;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
export interface User extends mongoose.Document {
    username: string;
    email: string;
    password: string;
}
