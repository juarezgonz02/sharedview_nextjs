import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { User } from "../../../users/models/entities/user.schema";
import mongoose, { HydratedDocument } from "mongoose";
import { genRoomCode } from "src/rooms/utils/room.utils";

export type RoomDocument = HydratedDocument<Room>;

@Schema({
    timestamps: true,
})
export class Room{
    @Prop({ required: true})
    code: string;
    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId,  ref: "User"}], required: true})
    owner: string;
    @Prop()
    name: string;
    @Prop({ default: true })
    isPublic: boolean;
    @Prop({ default: []})
    accessUsers: mongoose.Types.ObjectId[];
    @Prop({ default: new Date() })
    creationDate: Date;
    @Prop()
    expirationDate: Date;
}

export const RoomSchema = SchemaFactory.createForClass(Room);