import { UserRepository } from '../domain/user.repository';
import { UserValue } from '../domain/user.value';

export class UserUseCase {
    constructor(private readonly UserRepository:UserRepository){

    }

    public async registerUserAndNotify(){
        
    }
    public registerUser = async({name, email, description}:{name:string, email:string, description:string}) => {
        const userValue = new UserValue({name, email, description});
        const userCreated = await this.UserRepository.registerUser(userValue);
        return userCreated;
    }

    public getDetailUser = async (uuid:string) => {
        const user = await this.UserRepository.findUserByID(uuid);
        return user;
    }
}