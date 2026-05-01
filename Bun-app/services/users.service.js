import { sql } from "../db/db.js";

export const userService = {
  async getAll() {
    const users = await sql`SELECT * FROM bun_schema.users`;
    return users;
  },

  async create({ name, email }) {
    const result = await sql`
      INSERT INTO bun_schema.users (name, email)
      VALUES (${name}, ${email})
      RETURNING *
    `;
    return result[0];
  },
};
