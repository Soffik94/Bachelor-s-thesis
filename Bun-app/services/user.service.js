import { client } from "../db/db.js";

export const userService = {
  async getAll() {
    const result = await client.query("SELECT * FROM users");
    return result.rows;
  },

  async create({ name, email }) {
    const result = await client.query(
      "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
      [name, email],
    );
    return result.rows[0];
  },
};
