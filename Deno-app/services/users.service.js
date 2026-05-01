//je voláno z kontroleru
import { getClient } from "../db/pool.js";

export const createUser = async (name, email) => {
  const client = await getClient();

  try {
    const result = await client.queryObject(
      "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
      [name, email]
    );

    return result.rows[0];
  } finally {
    client.release();
  }
};

export const getUsers = async () => {
  const client = await getClient();

  try {
    const result = await client.queryObject(
      "SELECT * FROM users ORDER BY id DESC"
    );

    return result.rows;
  } finally {

    
    client.release();
  }
};
