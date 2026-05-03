import { getUsersTable, sql } from "../db/db.js";

export const userService = {
  async getAll() {
    const usersTable = await getUsersTable();
    const users = await sql`SELECT * FROM ${sql(usersTable)} ORDER BY id DESC`;
    return users;
  },

  async create({ name, email }) {
    const usersTable = await getUsersTable();
    const result = await sql`
      INSERT INTO ${sql(usersTable)} (name, email)
      VALUES (${name}, ${email})
      RETURNING *
    `;
    return result[0];
  },
};
