import { Injectable, Logger } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "../users/user.service";
import { LoginUserDto} from "../users/models/dtos/loginUser.dto"

@Injectable()
export class AuthService{
    private readonly logger = new Logger(AuthService.name);

    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ){}

    async login(loginUserDto: LoginUserDto) {
        const user = await this.userService.findUserByIdentifier(loginUserDto.identifier);
        const payload = { sub: user._id, username: user.username };
        const accessToken = await this.jwtService.signAsync(payload);
        return accessToken;
    }

    async validateUser(identifier: string, pass: string): Promise<any> {
        const user = await this.userService.findUserByIdentifier(identifier);
        if (user && user.password === pass) {
          const { password, ...result } = user;
          return result;
        }
        return null;
      }
}