import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    registerUser(createUserDto: CreateUserDto): Promise<import("./schemas/user.schema").User>;
}
