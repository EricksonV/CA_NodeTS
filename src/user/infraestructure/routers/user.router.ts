

import {Router} from "express";
import { MongoRepository } from '../repository/mongo.repository';
import { UserUseCase } from '../../application/userUseCase';
import { UserController } from "../controller/user.controller";


const route = Router();
/**
 * Inicializacion de Repository
 */
const mongoRepository = new MongoRepository();

/**
 * Inicializaciond de Casos de Uso
 */
const userUseCase = new UserUseCase(mongoRepository);

/**
 * Iniciar el UserController
 */
const userController = new UserController(userUseCase);

route.post(`/user`, userController.postController);
route.get(`/user`, userController.getController);

export default route;
