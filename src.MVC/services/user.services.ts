import UserModel from "../model/user.schema";
import { UserInterface } from '../types/user.type';

/**
 * Registro de Usuario
 * @param user 
 * @returns 
 */
export const registerUser = async (user:UserInterface) => {
    const response = await UserModel.create(user);
    return response;
}

/**
 * Consulta de Usuario por Email
 * @param email 
 * @returns 
 */
export const getDetailUser = async (email:string) => {
    const response = await UserModel.findOne({email});
    return response;
}