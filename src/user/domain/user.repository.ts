import { UserEntity } from "./user.entity";

export interface UserRepository {
    findUserByID(uuid:string):Promise<UserEntity | null>;
    registerUser(user:UserEntity):Promise<UserEntity | null>;
    listUser():Promise<UserEntity[] | null>;
}