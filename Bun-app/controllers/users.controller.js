import { userService } from "../services/users.service.js";

export async function getUsers() {
  const users = await userService.getAll();
  return Response.json(users);
}

export async function createUser(req) {
  const body = await req.json();
  const user = await userService.create(body);
  return Response.json(user, { status: 201 });
}
