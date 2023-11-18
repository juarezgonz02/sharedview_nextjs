import { Injectable, Logger } from "@nestjs/common"
import { CreateRoomDto } from "./models/dtos/CreateRoomDto";
import { InjectModel } from "@nestjs/mongoose";
import { Room } from "./models/entities/room.schema";
import { Model } from "mongoose";
import { genRoomCode } from "./utils/room.utils";

@Injectable()
export class RoomService{
    private readonly logger = new Logger(RoomService.name);

    constructor(
        @InjectModel(Room.name) private roomModel: Model<Room>,
    ){}

    async createRoom(room: CreateRoomDto, userId: string){
        const createdRoom = new this.roomModel({
            name: room.name,
            owner: userId
        });
        createdRoom.code = genRoomCode();
        createdRoom.creationDate = new Date();
        createdRoom.expirationDate = new Date();
        let createdAt = new Date();
        createdRoom.creationDate.setUTCDate(createdAt.getUTCDate());
        createdRoom.expirationDate.setUTCDate(createdAt.getUTCDate()+1);
        await createdRoom.save();
    }
}