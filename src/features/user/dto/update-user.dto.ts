import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import {BasicUserDto} from "./base-user.dto";

export class UpdateUserDto extends PartialType(BasicUserDto) {}
