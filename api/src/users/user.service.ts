import { Injectable, Logger } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./models/entities/user.schema";
import { Model } from "mongoose";
import { RegisterUserDto } from "./models/dtos/registerUser.dto";
import * as bcrypt from "bcrypt";

@Injectable()
export class UserService{
    private readonly logger = new Logger(UserService.name);
    constructor(
        @InjectModel(User.name) private userModel: Model<User>,
    ){}

    async createUser(registerUserDto: RegisterUserDto){
        const createdUser = new this.userModel({
            name: registerUserDto.name,
            username: registerUserDto.username,
            email: registerUserDto.email
        });

        createdUser.salt = await createdUser.genSalt;
        createdUser.hash = registerUserDto.password;
        createdUser.save();
        this.logger.debug(`User created with id: ${createdUser._id}`);
    }

    async findUserByIdentifier(identifier: string){
        const userFound = await this.userModel.findOne({ $or: [{_id: identifier},{username: identifier}, { email: identifier}] }).exec();
        return userFound;
    }

    async deleteUserByIdentifier(identifier: string){
        await this.userModel.deleteOne({ $or: [{_id: identifier}, { username: identifier}, {email: identifier}]});
    }
}