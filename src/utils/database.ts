import mysql from 'mysql2/promise';
// Khởi tạo kết nối
const pool = mysql.createPool({
    database: process.env.DB_NAME || 'news',
    user: process.env.DB_USER || 'root',
    port: parseInt(process.env.DB_PORT || '3306' ),
    password: process.env.DB_PASSWORD || '1234',
    host: process.env.DB_HOST || 'localhost',
});

export default pool;
