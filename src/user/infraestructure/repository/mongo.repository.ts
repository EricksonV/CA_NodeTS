import { UserEntity } from "../../domain/user.entity";
import { UserRepository } from "../../domain/user.repository";

import UserModel from "../models/user.schema";

export class MongoRepository implements UserRepository{
    async findUserByID(uuid: string): Promise<any> {
        const user = await UserModel.findOne({uuid});
        return user;
    }
    async registerUser(userIn: UserEntity): Promise<any> {
        const user = await UserModel.create(userIn);
        return user;
    }
    async listUser(): Promise<any> {
        const user = await UserModel.find();
        return user;
    }
    
}