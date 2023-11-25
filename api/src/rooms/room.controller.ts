import { Body, Controller, Delete, Get, Logger, Param, Patch, Post, Query, Req, Res, UseGuards } from "@nestjs/common";
import { CreateRoomDto } from "./models/dtos/CreateRoomDto";
import { AuthGuard } from "../auth/auth.guard";
import { RoomService } from "./room.service";
import { Request, Response } from "express";
import { User } from "../users/models/entities/user.schema";
import { UserService } from "../users/user.service";

@Controller("room")
export class RoomController{
    private readonly logger = new Logger(RoomController.name);
    constructor(
        private roomService: RoomService,
        private userService: UserService
    ){}
    /*
    Endpoints:
    CreateRoom<name>(Private) => Room DONE
    GetExpirationDate<code> (Public) => Date DONE
    TogglePublic<code> (Private) => void  DONE
    DeleteRoom<code> (Private) => void DONE
    ToggleUserAccess<username> (Private) => void DONE
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
            return res.status(201).json({room: roomCreated, message: "Room has been created!"});
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
            this.logger.verbose("Toggling Room's Publicity...");
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
            await this.roomService.toggleRoomPublicStatus(code, roomFound.isPublic);
            this.logger.verbose("Room Toggled!");
            return res.status(200).json({message: "Room's privacy has been toggled!"})
        } catch (error) {
            this.logger.error(error);
            return res.status(500).json({ message: "Internal Server Error!" });
        }
    }

    @UseGuards(AuthGuard)
    @Patch("/:code/user/:identifier")
    async toggleAccessUsers(@Req() req: Request, @Res() res: Response, @Param("code") code: string, @Param("identifier") user: string){
        try {
            this.logger.verbose("Toggling User Access...");
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
            const userFound =  await this.userService.findUserByIdentifier(user);
            const hasAccess = roomFound.accessUsers.findIndex(u => u.equals(userFound._id));
            if(hasAccess < 0){
                this.logger.verbose("Adding to Room...");
                await this.roomService.addUserToRoom(code, userFound._id as unknown as string);
            }else{
                this.logger.verbose("Removing from Room...");
                await this.roomService.deleteUserFromRoom(code, userFound._id as unknown as string);
            }
            
            this.logger.verbose("User Access toggled!");
            return res.status(200).json({ message: "User access has been toggled!"})
        } catch (error) {
            this.logger.error(error);
            return res.status(500).json({ message: "Internal Server Error!" });
        }
    }

    @Get("/status/:code")
    async getRoomStatus(@Req() req: Request, @Res() res: Response, @Param("code") code: string){
        try {
            this.logger.verbose("Fetching Room Status...");
            const roomFound = await this.roomService.getRoomInfo(code);
            if(!roomFound){
                this.logger.verbose("Room was not found");
                return res.status(404).json({message: "Room was not found!"})
            }
            let today = new Date();
            const dayDiff = roomFound.expirationDate.getTime() - today.getTime();
            const minuteDiff = roomFound.expirationDate.getUTCMinutes() - today.getUTCMinutes();
            if(dayDiff < 0 || (dayDiff == 0 && minuteDiff > 0)){
                this.logger.verbose("Room Status Fetched!");
                this.logger.verbose("Room has expired!");
                return res.status(200).json({ status: "Expired!", message: "You cannot access the room!"});
            }
            this.logger.verbose("Room is available");
            if(roomFound.isPublic){
                this.logger.verbose("Room is public, no invitation needed!");
                return res.status(200).json({ status: "Available!", message: "You can access the room!"});
            }

            this.logger.verbose("Redirect to authenticated path!")
            return res.redirect(`${req.baseUrl}/room/status/${code}/private`);
        } catch (error) {
            this.logger.error(error);
            return res.status(500).json({ message: "Internal Server Error!" });
        }
    }
    @UseGuards(AuthGuard)
    @Get("/status/:code/private")
    async userAccess(@Req() req: Request, @Res() res: Response, @Param("code") code: string){
        try {
            const roomFound = await this.roomService.getRoomInfo(code);
            const hasAccess = roomFound.accessUsers.findIndex(u => u == req.user["id"]);
            if(hasAccess < 0){
                this.logger.verbose("User is not in the access list!");
                return res.status(200).json({ status: "Unavailable!", message: "You cannot access the room!"});
                
            }else{
                this.logger.verbose("User is in the access list!");
                return res.status(200).json({ status: "Available!", message: "You can access the room!"});
            }
        } catch (error) {
            this.logger.error(error);
            return res.status(500).json({ message: "Internal Server Error!" });
        }
    }
}