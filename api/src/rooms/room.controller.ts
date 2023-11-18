import { Body, Controller, Logger, Post, Req, Res, UseGuards } from "@nestjs/common";
import { CreateRoomDto } from "./models/dtos/CreateRoomDto";
import { AuthGuard } from "src/auth/auth.guard";
import { RoomService } from "./room.service";
import { Request, Response } from "express";


@Controller("room")
export class RoomController{
    private readonly logger = new Logger(RoomController.name);
    constructor(
        private roomService: RoomService
    ){}
    /*
    Endpoints:
    
    CreateRoom<name>(Private) => Room
    GetExpirationDate<code> (Public) => Date
    TogglePublic<code> (Private) => void
    DeleteRoom<code> (Private) => void
    ToggleUserAccess<username> (Private) => void
    CanAccess() => Boolean
    isExpired() => Boolean
    */
    @UseGuards(AuthGuard)
    @Post()
    async createRoom(@Req() req: Request, @Res() res: Response, @Body() room: CreateRoomDto){
        try {
            this.logger.verbose("Creating Room...");
            const userId = req.user["id"];
            await this.roomService.createRoom(room, userId);
            this.logger.verbose("Room created!");
            return res.status(201).json({message: "Room has been created!"})
        } catch (error) {
            this.logger.error(error);
            return res.status(500).json({ message: "Internal Server Error!" });
        }
    }
}