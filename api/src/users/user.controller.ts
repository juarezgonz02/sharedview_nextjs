import { Controller, Delete, Logger, Post } from "@nestjs/common";

@Controller("user")
export class UserController{
    private readonly logger = new Logger(UserController.name);

    constructor(){}

    @Delete()
    async deleteUser(){

    }
};