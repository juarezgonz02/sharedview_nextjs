import { IsEmail, IsNotEmpty } from "class-validator";

export class RegisterUserDto{
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    username: string;
    @IsNotEmpty()
    @IsEmail()
    email: string;
    @IsNotEmpty()
    password: string;
    salt: string;
}