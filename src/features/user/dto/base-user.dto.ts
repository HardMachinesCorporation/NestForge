import {IUser} from "../../../common/interface/user/user.interface";
import {IsEmail, IsNotEmpty, IsString, IsStrongPassword} from "class-validator";


export class BasicUserDto implements IUser {
    @IsEmail()
    readonly email: string;
    @IsNotEmpty()
    @IsString()
    readonly name: string;
}