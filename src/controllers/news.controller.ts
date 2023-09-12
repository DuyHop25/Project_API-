import { Request , Response } from "express";
import * as userService from "../services/news.service"


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

export const findNews = async (req: Request, res: Response) => {
    // Lấy slug từ params
    const slug: string = String(req.params.slug);
    try {
      // lấy dữ liệu trong service
      const [news] = await userService.findNews(slug); // Sử dụng hàm findNews từ service
  
      if (news) {
        return res.status(200).json({
          status: 200,
          data: news,
        });
      } else {
        return res.status(404).json({
          status: 404,
          message: 'News not found', // Thông báo nếu không tìm thấy tin tức
        });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: 500,
        message: 'Internal Server Error',
      });
    }
  };



