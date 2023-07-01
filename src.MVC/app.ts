import userRoute from "./route/user.route";
import {dbInit}  from './db/mongo';

import "dotenv/config";

import express from "express";
import cors from "cors";



const app = express();
app.use(cors());
app.use(express.json()); 

const port = process.env.PORT || 3000;

app.use(userRoute);

dbInit();

app.listen(port, () => console.log(`Running of the port ${port}`));
