import { Body, Controller, Delete, Get, Logger, Param, Patch, Post, Query, Req, Res, UseGuards } from "@nestjs/common";
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
    GetExpirationDate<code> (Public) => Date DONE
    TogglePublic<code> (Private) => void 
    DeleteRoom<code> (Private) => void DONE
    ToggleUserAccess<username> (Private) => void
    CheckStatus<code> (Public) => statusObject
    */
    @UseGuards(AuthGuard)
    @Post()
    async createRoom(@Req() req: Request, @Res() res: Response, @Body() room: CreateRoomDto){
        try {
            this.logger.verbose("Creating Room...");
            const userId = req.user["id"];
            const roomCreated = await this.roomService.createRoom(room, userId);
            this.logger.verbose(roomCreated)
            this.logger.verbose("Room created!");
            return res.status(201).json({message: "Room has been created!"});
        } catch (error) {
            this.logger.error(error);
            return res.status(500).json({ message: "Internal Server Error!" });
        }
    }

    @Get("/:code")
    async getRoomByCode(@Req() req: Request, @Res() res: Response, @Param("code") code: string){
        try {
            this.logger.verbose("Fetching Expiration Status");
            const room = await this.roomService.getRoomPublic(code);
            if(!room){
                return res.status(404).json({ message: "Room was not found!" });
            }
            this.logger.verbose("Expiration Status Fetched!");
            return res.status(200).json({ room: room })
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
            const room = await this.roomService.getRoomInfo(code);
            if(!room){
                this.logger.verbose("Room not found.")
                return res.status(404).json({ message: "Room was not found!"});
            };

            //TODO: convert this into middleware or guard.
            if(room.owner != req.user["id"]){
                this.logger.verbose("User is not the owner")
                return res.status(403).json({ message: "Forbidden!" });
            };
            await this.roomService.deleteRoom(code);
            this.logger.verbose("Room Deleted!");
            return res.status(200).json({message: "Room has been deleted!"});
        } catch (error) {
            this.logger.error(error);
            return res.status(500).json({ message: "Internal Server Error!" });
        }
    }

    @UseGuards(AuthGuard)
    @Patch("/:code")
    async togglePublicStatus(@Req() req: Request, @Res() res: Response, @Param("code") code: string){
        try {
            this.logger.verbose("Toggling room's publicity...");
            const roomFound = await this.roomService.getRoomInfo(code);
            if(!roomFound){
                this.logger.verbose("Room not found.")
                return res.status(404).json({ message: "Room was not found!"});
            };
            //TODO: convert this into middleware or guard.
            if(roomFound.owner != req.user["id"]){
                this.logger.verbose("User is not the owner")
                return res.status(403).json({ message: "Forbidden!" });
            };
            await this.roomService.toggleRoomPublicStatus(code, req.user["id"])
            this.logger.verbose("Room toggled!");
            return res.status(200).json({message: "Room's privacy has been toggled!"})
        } catch (error) {
            this.logger.error(error);
            return res.status(500).json({ message: "Internal Server Error!" });
        }
    }
}