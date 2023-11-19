import { Body, Controller, HttpStatus, Logger, Post, Req, Res } from "@nestjs/common";
import { Request, Response } from "express";
import { UserService } from "src/users/user.service";
import { RegisterUserDto } from "../users/models/dtos/registerUser.dto"
import { LoginUserDto } from "../users/models/dtos/loginUser.dto";
import * as bcrypt from "bcrypt";
import { AuthService } from "./auth.service";
import {config} from 'dotenv'

config()

@Controller("auth")
export class AuthController {
  private readonly logger = new Logger(AuthController.name);

  /* Constructor with */
  constructor(
    private userService: UserService,
    private authService: AuthService
  ) { }


  @Post("/register")
  async register(@Req() req: Request, @Res() res: Response, @Body() user: RegisterUserDto) {
    try {
      this.logger.verbose("User trying to register...");
      const userFound = await this.userService.findUserByIdentifier(user.email)
        || await this.userService.findUserByIdentifier(user.username);

      if(userFound) return res.status(409).json({ message: "User already exists!"});
      
      await this.userService.createUser(user);
      this.logger.verbose("User registered!");
      return res.status(201).json({ message: "User Registered!"})

    } catch (error) {
      this.logger.error(error);
      return res.status(500).json({ message: "Internal Server Error!" });
    }
  }


  @Post("/login")
  async login(@Req() req: Request, @Res() res: Response, @Body() user: LoginUserDto) {
    try {
      this.logger.verbose("User attempting to log in...");
      const userFound = await this.userService.findUserByIdentifier(user.identifier);
      if(!userFound) return res.status(404).json({ error: "User not found! "});
      this.logger.verbose("Checking credentials")
      if(userFound.password != await bcrypt.hash(user.password, userFound.salt)){
        return res.status(401).json({ error: "Unauthorized!"});
      }
      const token = await this.authService.login(user);

      this.logger.verbose("Login Succesful!");

      return res.status(200)
          .cookie("token", token, {
              maxAge: 604800016,
              secure: process.env.NODE_ENV === 'production',
              httpOnly: true,
              path: "/",
              domain: process.env.APP_DOMAIN,
            })
          .json({
              token: token
          })

    } catch (error) {
      this.logger.error(error);
      return res.status(500).json({ message: "Internal Server Error!" });
    }
  }

}