import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schemas/user.schema';

const saltOrRounds = 10;

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly model: Model<UserDocument>,
  ) {}

  async findByField(email: string): Promise<User> {
    return await this.model.findOne({ email });
  }

  async findOne(id: string): Promise<User> {
    return await this.model.findById(id);
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    // hash password using bcrypt
    createUserDto.password = await bcrypt.hash(
      createUserDto.password,
      saltOrRounds,
    );
    return await new this.model(createUserDto).save();
  }
}
