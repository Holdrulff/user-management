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

module.exports = { getUsers, getUserById, createUser };
