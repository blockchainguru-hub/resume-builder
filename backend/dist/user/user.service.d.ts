import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './schemas/user.schema';
export declare class UserService {
    private readonly model;
    constructor(model: Model<UserDocument>);
    findByField(email: string): Promise<User>;
    findOne(id: string): Promise<User>;
    createUser(createUserDto: CreateUserDto): Promise<User>;
}
