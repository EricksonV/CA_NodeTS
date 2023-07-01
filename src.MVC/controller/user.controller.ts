import * as userServices from "../services/user.services";

import {Request, Response} from "express"

export const getUser = async (req: Request, res: Response) => {
    const { email } = req.query;
    const user = await userServices.getDetailUser(`${email}`);
    res.send(
        {
            user
        }
    );
}

export const insertUser = async ({body}: Request, res: Response) => {
    
    const user = await userServices.registerUser(body);
    res.send(
        {
            user
        }
    );
}