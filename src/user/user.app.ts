import userRoute from "./infraestructure/routers/user.router";
import {dbInit}  from './infraestructure/database/mongo';

import "dotenv/config";

import express from "express";
import cors from "cors";



const app = express();
app.use(cors());
app.use(express.json()); 

const port = process.env.PORT || 3000;

app.use(userRoute);

dbInit();

app.listen(port, () => console.log(`USER, Running of the port ${port}`));