import { Module, forwardRef } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "./models/entities/user.schema";
import { UserService } from "./user.service";
import { RoomModule } from "../rooms/room.module";
import { Room, RoomSchema } from "src/rooms/models/entities/room.schema";
import { UserController } from "./user.controller";

@Module({
    imports: [
        forwardRef(() => RoomModule),
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema}]),
        MongooseModule.forFeature([{ name: Room.name, schema: RoomSchema }])
    ],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService]
})
export class UserModule{};