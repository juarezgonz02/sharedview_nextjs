import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Room, RoomSchema } from "./models/entities/room.schema";
import { Mongoose } from "mongoose";
import { User, UserSchema } from "src/users/models/entities/user.schema";
import { RoomService } from "./room.service";
import { RoomController } from "./room.controller";
import { UserModule } from "src/users/user.module";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Room.name, schema: RoomSchema}]),
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema}]),
        UserModule,
    ],
    controllers: [RoomController],
    providers: [RoomService],
    exports: [RoomService]
})
export class RoomModule{}