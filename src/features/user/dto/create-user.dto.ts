import {BasicUserDto} from "./base-user.dto";
import {IsStrongPassword} from "class-validator";

export class CreateUserDto extends BasicUserDto{
    @IsStrongPassword()
    readonly password: string;
}
