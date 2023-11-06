import { Body, Controller, Logger, Post, Req, Res } from "@nestjs/common";
import { Request, Response } from "express";
import { UserService } from "src/users/user.service";
import { RegisterUserDto } from "../users/models/dtos/registerUser.dto"

@Controller("auth")
export class AuthController {
  private readonly logger = new Logger(AuthController.name);

  /* Constructor with */
  constructor(
    private userService: UserService,
  ) { }

  @Post("/register")
  async register(@Req() req: Request, @Res() res: Response, @Body() user: RegisterUserDto) {
    try {
      this.logger.verbose("User trying to register...");
      const userFound = await this.userService.findUserByIdentifier(user.email)
        || await this.userService.findUserByIdentifier(user.username);

      if(userFound) return res.status(409).json({ message: "User already exists!"});
      
    } catch (error) {
      this.logger.error(error);
      return res.status(500).json({ message: "Internal Server Error!" });
    }
  }

  @Post("/login")
  async login(@Req() req: Request, @Res() res: Response, @Body() user) {
    try {

    } catch (error) {
      this.logger.error(error);
      return res.status(500).json({ message: "Internal Server Error!" });
    }
  }

}