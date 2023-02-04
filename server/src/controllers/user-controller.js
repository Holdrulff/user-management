const userService = require("../services/user-service");

async function getUsers(request, response) {
  const users = await userService.getUsers();

  return response.send({
    data: users,
  });
}

async function getUserById(request, response) {
  const { id } = request.params;

  const user = await userService.getUserById(id);

  return response.send({
    data: user,
  });
}

async function createUser(request, response) {
  const name = request.body.name;
  const email = request.body.email;

  const user = await userService.createUser(name, email);

  return response.send({
    message: "User inserted successfully",
    data: user,
  });
}

async function updateUser(request, response) {
  const id = request.params.id;
  const name = request.body.name;
  const email = request.body.email;

  await userService.updateUser(id, name, email);

  return response.send({
    message: "User updated successfully",
  });
}

async function deleteUser(request, response) {
  const id = request.params.id;

  await userService.deleteUser(id);
  return response.send({
    message: `User deleted successfully`,
  });
}

module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser };
