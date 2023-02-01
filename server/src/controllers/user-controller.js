const { users } = require("../../db");
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
  const user = users.find((user) => user.id === Number(id));

  user.name = request.body.name;
  user.email = request.body.email;

  return response.send({
    message: "User updated successfully",
  });
}

async function deleteUser(request, response) {
  const id = request.params.id;
  const userIndex = users.findIndex((user) => user.id === Number(id));

  users.splice(userIndex, 1);

  return response.send({
    message: `User deleted successfully`,
  });
}

module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser };
