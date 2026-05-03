import { userService } from "../services/users.service.js";

export async function getUsers() {
  const users = await userService.getAll();
  return Response.json(users);
}

export async function createUser(req) {
  let body;

  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "invalid json" }, { status: 400 });
  }

  const { name, email } = body ?? {};

  if (!name || !email) {
    return Response.json({ error: "name and email required" }, { status: 400 });
  }

  const user = await userService.create(body);
  return Response.json(user, { status: 201 });
}
