import * as usersService from "../services/users.service.js";

export async function createUser(body) {
  const { name, email } = body;

  if (!name || !email) {
    return { status: 400, body: { error: "name and email required" } };
  }

  const user = await usersService.createUser(name, email);
  return { status: 201, body: user };
}

export async function getUsers() {
  const users = await usersService.getUsers();
  return { status: 200, body: users };
}