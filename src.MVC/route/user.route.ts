import * as userController from "../controller/user.controller"

import {Router} from "express";


const route = Router();
/**
 * Ruta POST HTTP
 */
route.post(`/user`, userController.insertUser);
/**
 * Ruta GET HTTP
 */
route.get(`/user`, userController.getUser);

export default route;
