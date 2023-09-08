// Nơi lưu data ,lấy data
import pool from "../utils/database";

// Hàm lấy thông tất cả user
export const findAll = () => {
    // lấy dữ liệu từ db
    return pool.execute("SELECT * FROM users")
}

// Hàm lấy thông tin một user theo Id 
export const findOne = (id :number) => {
    return pool.execute("SELECT * FROM users WHERE UserId = ?", [id])
}

// Hàm gọi câu lệnh truy vấn xóa thông tin 1 user theo id
export const remove = (id :number) => {
    return pool.execute("DELETE FROM users WHERE UserId = ?", [id])
}

// Hàm thêm thông tin 1 user 

export const create = (
    UserName: string, 
    DateOfBirth: string,
    Address: string
    ) => {
    return pool.execute(
      "INSERT INTO users(UserName, DateOfBirth, Address) VALUES (?, ?, ?)",
      [UserName, DateOfBirth, Address]
    );
  };
  