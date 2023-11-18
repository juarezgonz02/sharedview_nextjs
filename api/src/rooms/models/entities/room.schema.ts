import { Prop, Schema } from "@nestjs/mongoose";
import { User } from "../../../users/models/entities/user.schema";
import mongoose from "mongoose";

@Schema({
    timestamps: true,
})
export class Room{
    @Prop({ required: true})
    code: string;
    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: "User"}], required: true})
    owner: User;
    @Prop()
    name: string;
    @Prop({ default: true})
    isPublic: boolean;
    @Prop({ default: []})
    accessUsers: User[]
}