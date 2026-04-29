import { sql } from "../db/db.js";

export const userService = {
  async getAll() {
    const users = await sql`SELECT * FROM users`;
    return users;
  },

  async create({ name, email }) {
    const result = await sql`
      INSERT INTO users (name, email)
      VALUES (${name}, ${email})
      RETURNING *
    `;
    return result[0];
  },
};
