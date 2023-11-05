import { Body, Controller, Logger, Post, Req, Res } from "@nestjs/common";
import { Request, Response } from "express";

@Controller("auth")
export class AuthController{
    private readonly logger = new Logger(AuthController.name);

    /* Constructor with */

    @Post("/register")
    async register(@Req() req: Request, @Res() res: Response, @Body() user){
        try {
            
        } catch (error) {
          this.logger.error(error);
          return res.status(500).json({message: "Internal Server Error!"});  
        }
    }

    @Post("/login")
    async login(@Req() req: Request, @Res() res: Response, @Body() user){
        try {
            
        } catch (error) {
          this.logger.error(error);
          return res.status(500).json({message: "Internal Server Error!"});  
        }
    }

}