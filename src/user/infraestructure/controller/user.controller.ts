
import {Request, Response} from "express"
import { UserUseCase } from "../../application/userUseCase";


export class UserController {
    constructor(private userUseCase:UserUseCase){


    }
    public getController = async (req:Request, res:Response) => {
        const { uuid } = req.query;
        const user =await this.userUseCase.getDetailUser(`${uuid}`)
        res.send({user});
    }
    
    public postController = async (req:Request, res:Response) => {
        const user = await this.userUseCase.registerUser(req.body);
        res.send({ user });

    }
}