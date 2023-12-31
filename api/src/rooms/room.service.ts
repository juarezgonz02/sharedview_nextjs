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
        return await createdRoom.save();
    }

    async getRoomInfo(roomCode: string){
        const queryResults = await this.roomModel.findOne({ code: roomCode})
            .select("-createdAt -updatedAt -__v")
            .exec();
        return queryResults;
    }

    async getRoomPublic(roomCode: string){
        const queryResults = await this.roomModel.findOne({ code: roomCode})
            .select("-owner -accessUsers -createdAt -updatedAt -__v")
            .exec();
        return queryResults;
    }

    async getRoomsByOwner(ownerId: string){
        const queryResults = await this.roomModel.find({owner: ownerId})
            .select("-createdAt -updatedAt -__v")
            .populate("accessUsers")
            .exec()
        return queryResults;
    }

    async toggleRoomPublicStatus(code: string, isPublic: boolean){
        const roomUpdated = await this.roomModel.updateOne({code:code},{ isPublic: !isPublic});
        this.logger.warn(roomUpdated)
    }

    async deleteRoom(roomCode: string){
        await this.roomModel.deleteOne({ code: roomCode})
            .exec();
    }

    async addUserToRoom(roomCode: string, userId: string){
        await this.roomModel.updateOne({ code: roomCode}, { $push: { accessUsers: userId }});
    }

    async deleteUserFromRoom(roomCode: string, userId: string){
        await this.roomModel.updateOne({ code: roomCode}, { $pull: { accessUsers: userId}});
    }

}