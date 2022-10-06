import { Body, Controller, Post } from '@nestjs/common';
import { HttpException, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async registerUser(@Body() createUserDto: CreateUserDto) {
    const user = await this.userService.findByField(createUserDto.email);
    if (!user) {
      return this.userService.createUser(createUserDto);
    } else {
      throw new HttpException(
        {
          status: HttpStatus.CONFLICT,
          error: 'Email Already Exists.',
        },
        HttpStatus.CONFLICT,
      );
    }
  }
}
