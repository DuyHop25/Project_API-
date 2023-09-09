import express , { Request , Response } from "express";
import * as userService from "../services/user.service"

// API Lấy thông tin tất cả user
export const findAll = async (req: Request, res: Response) => {
    try{
        // lấy dữ liệu trong service
        const [user] = await userService.findAll();
        return res.status(200).json({
            status: 200,
            data: user,
        })
    }
    catch(error){
        console.log(error);
    }
}

// API lấy thông tin 1 user theo id
export const findOne = async (req: Request, res: Response) => {
    // Lấy id từ params
    const id: number = +req.params.id;
    try{
        // lấy dữ liệu trong service
        const [user] = await userService.findOne(id);

        return res.status(200).json({
            status: 200,
            data: user,
        })
    }
    catch(error){
        console.log(error);
    }
}

// API xóa thông tin 1 user theo id
export const remove = async (req: Request, res: Response) => {
    // Lấy id từ params
    const id: number = +req.params.id;
    try{
        // xóa dữ liệu
        await userService.remove(id);

        return res.status(200).json({
            status: 200,
            message: "xóa thành công",
        })
    }
    catch(error){
        return res.status(500).json({
            massage: error,
        })
    }
}

export const create = async (req: Request, res: Response) => {
    const { UserName , DateOfBirth, Address } = req.body; 
    try{

        await userService.create(UserName, DateOfBirth , Address);

        return res.status(200).json({
            status: 200,
            message: "Thêm User thành công",
        })
    }
    catch(error){
        return res.status(500).json({
            massage: error,
        })
    }
}
