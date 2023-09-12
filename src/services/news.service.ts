import pool from "../utils/database";

export const findAll = () => {
  return pool.execute("SELECT * FROM news");
};

export const findOne = (id: number) => {
  return pool.execute("SELECT * FROM news WHERE id = ?", [id]);
};

export const findNews = (slug: string) => {
  return pool.execute("SELECT * FROM news WHERE slug = ?", [slug]);
};
