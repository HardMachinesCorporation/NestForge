import {IUser} from "../../../common/interface/user/user.interface";
import {Column, Entity, Index, PrimaryGeneratedColumn} from "typeorm";



@Entity("users")
export class User implements IUser{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Index()
    @Column({unique:true})
    email: string;
    @Column()
    password: string;

}
