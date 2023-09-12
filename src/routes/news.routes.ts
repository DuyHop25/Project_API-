import express  from "express";
const userRouter = express.Router();

import { findAll, findNews } from "../controllers/news.controller";

userRouter.get('/', findAll)

userRouter.get('/:slug', findNews)



export default userRouter;