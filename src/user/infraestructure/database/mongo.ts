import "dotenv/config";

import { connect } from "mongoose";

const DB_URI = process.env.DB_URI;

export const dbInit = async () => {
    try {
        if(!DB_URI){
            throw new Error('Problemas en al variable de entorno');
        }
        await connect(DB_URI)
        console.log('DB READY');
    } catch (error) {
        console.log(error);
        throw new Error('Error en inicio de BD');
    }
}
