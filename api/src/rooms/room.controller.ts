import { Body, Controller, Delete, Get, Logger, Param, Post, Query, Req, Res, UseGuards } from "@nestjs/common";
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
    CreateRoom<name>(Private) => Room DONE
    GetExpirationDate<code> (Public) => Date
    TogglePublic<code> (Private) => void
    DeleteRoom<code> (Private) => void DONE
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

    @Get("/:code")
    async getExpirationdate(@Req() req: Request, @Res() res: Response, @Param("code") code: string){
        try {
            this.logger.verbose("Fetching Expiration Status");

            const roomExp =  this.roomService.getRoom(code);

            this.logger.verbose("Expiration Status Fetched!");
            return res.status(200).json()
        } catch (error) {
            this.logger.error(error);
            return res.status(500).json({ message: "Internal Server Error!" });
        }
    }

    @UseGuards(AuthGuard)
    @Delete("/:code")
    async deleteRoom(@Req() req: Request, @Res() res: Response, @Param("code") code: string){
        try {
            this.logger.verbose("Deleting Room...");
            const room = await this.roomService.getRoom(code);
            //TODO: conver this into middleware or guard.
            if(room.owner[0] != req.user["id"]) return res.status(403).json({ message: "Forbidden!" });
            await this.roomService.deleteRoom(code);
            this.logger.verbose("Room Deleted!");
            return res.status(200).json({message: "Room has been deleted!"})
        } catch (error) {
            this.logger.error(error);
            return res.status(500).json({ message: "Internal Server Error!" });
        }
    }
}