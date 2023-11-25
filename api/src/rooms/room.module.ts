import { Module, forwardRef } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Room, RoomSchema } from "./models/entities/room.schema";
import { User, UserSchema } from "src/users/models/entities/user.schema";
import { RoomService } from "./room.service";
import { RoomController } from "./room.controller";
import { UserModule } from "src/users/user.module";

@Module({
    imports: [
        //TODO: Search if circular dependency is a normal ocurrence or should it be a redesign
        forwardRef(() => UserModule),
        MongooseModule.forFeature([{ name: Room.name, schema: RoomSchema}]),
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema}]),
    ],
    controllers: [RoomController],
    providers: [RoomService],
    exports: [RoomService]
})
export class RoomModule{}