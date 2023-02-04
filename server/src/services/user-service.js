const { users } = require("../../db");

async function getUsers() {
  return users;
}

async function getUserById(id) {
  return users.find((user) => user.id === Number(id));
}

async function createUser(name, email) {
  const newUser = {
    id: users.length + 1,
    name: name,
    email: email,
  };
  users.push(newUser);
  return newUser;
}

async function updateUser(id, name, email) {
  const user = users.find((user) => user.id === Number(id));

  user.name = name;
  user.email = email;
  return user;
}

async function deleteUser(id) {
  const userIndex = users.findIndex((user) => user.id === Number(id));
  users.splice(userIndex, 1);
}

module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser };
