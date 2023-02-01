const { Router } = require("express");
const userController = require("../controllers/user-controller");

const userRoutes = Router();

userRoutes.get("/users", userController.getUsers);
userRoutes.get("/user/:id", userController.getUserById);
userRoutes.post("/user", userController.createUser);
userRoutes.put("/user/:id", userController.updateUser);
userRoutes.delete("/user/:id", userController.deleteUser);

module.exports = { userRoutes };
