import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "../users/models/entities/user.schema";
import { AuthController } from "./auth.controller";
import { UserModule } from "src/users/user.module";

@Module({
    imports: [
        UserModule,
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema}]),
    ],
    controllers: [AuthController],
    providers: [],
    exports: []
})
export class AuthModule{};