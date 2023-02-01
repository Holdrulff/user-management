const { Router } = require("express");
const { userRoutes } = require("./user-routes");

const routes = Router();

/**
 * Metodos HTTP
 * GET - Solicitacao de informacao
 * POST - Mandar informacoes para o servidor (Registros novos)
 * PUT - Mandar informacoes para o servidor (Alteracao de registro)
 * PATCH - Mandar informacoes para o servidor (Alteracao menor de registro)
 * DELETE - Remove informacoes do servidor (Remocao de registro)
 */

/**
 * @ parametros que são enviados na url da requisicao
 * request.params = /users/:id
 *
 * @ parametros opcionais que são enviados na url da requisicao atraves de variaveis
 * request.query = /users?name=john&age=25&gender=male
 *
 * @ dados que são enviados no corpo da requisicao
 * request.body = { name: "john sena", message: "bing chilling" }
 */

routes.use("/", userRoutes);

module.exports = { routes };
