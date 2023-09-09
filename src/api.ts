import userRouter from "./routes/user.routes";
import dotenv from "dotenv"
import bodyParser from "body-parser";
import express from "express"

const cors = require('cors');

// Sử dụng middleware cors để cấu hình CORS

const app = express();

dotenv.config();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.get("/", (req:any,res :any) => {
//     res.send("<h1>HELLO</h1>");
// });
app.use("/api/v1/users", userRouter);

app.listen(8000, () => {
    console.log(`http://localhost:8000`);  
});


