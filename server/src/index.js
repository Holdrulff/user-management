const express = require("express");
const { users } = require("../db")

const app = express();

/**
 * Metodos HTTP
 * GET - Solicitacao de informacao
 * POST - Mandar informacoes para o servidor (Registros novos)
 * PUT - Mandar informacoes para o servidor (Alteracao de registro)
 * PATCH - Mandar informacoes para o servidor (Alteracao menor de registro)
 * DELETE - Remove informacoes do servidor (Remocao de registro)
 */

// Rota para pegar todos os usuarios
app.get("/users", (request, response) => {
    return response.send({
        data: users
    })
})

// Rota para pegar um usuario por ID
app.get("/user/:id", (request, response) => {
    const { id } = request.params;
    const user = users.find(user => user.id === Number(id));

    return response.send({
        data: user
    });
})

// Rota para criar usurio

// Rota para atualizar usuario

// Rota para remover usuario

app.listen(5000, () => {
    console.log("Server is running")
})
