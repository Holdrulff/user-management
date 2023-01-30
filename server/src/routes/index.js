const { Router } = require("express")
const { userRoutes } = require("./user-routes")

const routes = Router()

routes.use("/", userRoutes)

module.exports = { routes }