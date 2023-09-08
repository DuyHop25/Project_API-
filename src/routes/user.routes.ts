import express  from "express";
const userRouter = express.Router();

import { create, findAll, findOne ,remove} from "../controllers/user.controller";


// API Lấy thông tin tất cả user
userRouter.get('/', findAll)

// API Lấy thông tin 1 user theo id
userRouter.get('/:id', findOne)

userRouter.delete('/:id', remove)

userRouter.post('/', create)

export default userRouter;