import { Controller, Delete, Logger, Param, Post, Req, Res } from "@nestjs/common";
import { Request, Response } from "express";
import { UserService } from "./user.service";

@Controller("user")
export class UserController{
    private readonly logger = new Logger(UserController.name);

    constructor(
        private userService: UserService,
    ){}

    @Delete('/:identifier')
    async deleteUser(@Req() req: Request, @Res() res: Response, @Param('identifier') identifier: string){
        try {
            this.logger.verbose("Deleting User...");
            const userFound = await this.userService.findUserByIdentifier(identifier);

            if(!userFound){
                this.logger.verbose("User was not found");
                return res.status(404).json({message: "User you are trying to delete has not been found."})
            }
            await this.userService.deleteUserByIdentifier(identifier)
            this.logger.verbose("User Deleted!");
            return res.status(200).json({message: "User has been deleted!"})
        } catch (error) {
            this.logger.error(error);
            return res.status(500).json({ message: "Internal Server Error!" });
        }
    }
};