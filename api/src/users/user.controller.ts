import { Controller, Delete, Get, Inject, Logger, Param, Post, Req, Res, UseGuards, forwardRef } from "@nestjs/common";
import { Request, Response } from "express";
import { UserService } from "./user.service";
import { AuthGuard } from "src/auth/auth.guard";
import { RoomService } from "src/rooms/room.service";

@Controller("user")
export class UserController{
    private readonly logger = new Logger(UserController.name);

    constructor(
        private userService: UserService,
        private roomService: RoomService
    ){}
    
    @UseGuards(AuthGuard)
    @Delete()
    async deleteUser(@Req() req: Request, @Res() res: Response){
        try {
            const userId = req.user["id"]
            this.logger.log(userId)
            this.logger.verbose("Deleting User...");
            const userFound = await this.userService.findUserByIdentifier(userId);
            this.logger.log(userId)
            if(!userFound){
                this.logger.verbose("User was not found");
                return res.status(404).json({message: "User you are trying to delete has not been found."})
            }
            await this.userService.deleteUserByIdentifier(userId)
            this.logger.verbose("User Deleted!");
            return res.status(200).json({message: "User has been deleted!"})
        } catch (error) {
            this.logger.error(error);
            return res.status(500).json({ message: "Internal Server Error!" });
        }
    }
    @UseGuards(AuthGuard)
    @Get("/rooms")
    async getRooms(@Req() req: Request, @Res() res: Response){
        try {
            this.logger.verbose("Fetching User's Rooms...");
            const userId = req.user["id"];
            const roomsOwnedByUser = await this.roomService.getRoomsByOwner(userId);

            if(!roomsOwnedByUser){
                this.logger.verbose("No rooms were found where User is the owner!")
                return res.status(404).json({message: "No rooms were found!"})
            }

            this.logger.verbose("User's Rooms Fetched!");
            return res.status(200).json({ rooms: roomsOwnedByUser })
        } catch (error) {
            this.logger.error(error);
            return res.status(500).json({ message: "Internal Server Error!" });
        }
    }
};