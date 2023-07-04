import {
  Injectable,
  HttpException,
  HttpStatus,
  NotFoundException,
} from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { CreateUserDto } from './dto/user.create.dto';
import { LoginUserDto } from './dto/user-login.dto';
import { Model } from 'mongoose';
import { User } from './entity/user.model';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async findByLogin({ username, password }: LoginUserDto): Promise<any> {
    const user = await this.getUser(username);

    if (!user) {
      throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
    }

    // compare passwords
    const areEqual = await this.comparePasswords(user.password, password);

    if (!areEqual) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }

    return user;
  }

  async findByPayload({ username }: any): Promise<any> {
    const user = await this.userModel.findOne({ username: username }).exec();
    return user;
  }

  async create(userDto: CreateUserDto) {
    let { username, password, email } = userDto;

    // check if the user exists in the db
    console.log(password);
    password = await bcrypt.hash(password, 10);
    const user = new this.userModel({
      username,
      password,
      email,
    });

    const result = await user.save();
    return result;
  }

  private _sanitizeUser(user: any) {
    delete user.password;
    return user;
  }

  async getUser(username: string): Promise<User> {
    let user;
    try {
      user = await this.userModel.findOne({ username: username }).exec();
    } catch (error) {
      throw new NotFoundException(`Could not find user ${username}`);
    }

    if (!user) {
      throw new NotFoundException(`Could not find user ${username}`);
    }
    return user as User;
  }

  async comparePasswords(userPassword, currentPassword) {
    return await bcrypt.compare(currentPassword, userPassword);
  }
}
