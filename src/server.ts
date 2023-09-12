import userRouter from "./routes/news.routes";
// dotenv: Thư viện này được sử dụng để đọc các biến môi trường từ tệp .env. Các biến này thường được sử dụng để cấu hình ứng dụng, ví dụ như cài đặt cổng và chuỗi kết nối đến cơ sở dữ liệu.
import dotenv from "dotenv"
// Middleware này giúp bạn xử lý dữ liệu gửi đến qua các yêu cầu HTTP, ví dụ như JSON hoặc dữ liệu form.
import bodyParser from "body-parser";
// express: Thư viện Express.js để xây dựng ứng dụng web.
import express from "express"
// cors: Middleware để xử lý CORS (Cross-Origin Resource Sharing), cho phép tài nguyên từ một nguồn gốc khác có thể được truy cập từ máy chủ của bạn.
const cors = require('cors');

// Sử dụng middleware cors để cấu hình CORS

const app = express();

dotenv.config();

app.use(cors());

// Sử dụng middleware body-parser để xử lý dữ liệu gửi đến qua yêu cầu HTTP. Middleware này cho phép bạn đọc và xử lý dữ liệu JSON và dữ liệu form từ các yêu cầu.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.get("/", (req:any,res :any) => {
//     res.send("<h1>HELLO</h1>");
// });
app.use("/api/v1/news", userRouter);

app.listen(8000, () => {
    console.log(`http://localhost:8000`);  
});


