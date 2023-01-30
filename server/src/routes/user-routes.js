const { Router } = require("express")
const { users } = require("../../db")

/**
 * Metodos HTTP
 * GET - Solicitacao de informacao
 * POST - Mandar informacoes para o servidor (Registros novos)
 * PUT - Mandar informacoes para o servidor (Alteracao de registro)
 * PATCH - Mandar informacoes para o servidor (Alteracao menor de registro)
 * DELETE - Remove informacoes do servidor (Remocao de registro)
 */

const userRoutes = Router()

// Rota para pegar todos os usuarios
userRoutes.get("/users", (request, response) => {
    return response.send({
        data: users
    })
})

// Rota para pegar um usuario por ID
userRoutes.get("/user/:id", (request, response) => {
    const { id } = request.params;
    const user = users.find(user => user.id === Number(id));

    return response.send({
        data: user
    });
})

// Rota para criar usurio
userRoutes.post("/user", (request, response) => {
    const newUser = {
        id: users.length + 1,    
        name: request.body.name,
        email: request.body.email,
    }

    users.push(newUser)

    return response.send({
        message: "User inserted successfully"
    })
})

// Rota para atualizar usuario
userRoutes.put("/user/:id", (request, response) => {
    const id = request.params.id;
    const user = users.find(user => user.id === Number(id));

    user.name = request.body.name;
    user.email = request.body.email;

    return response.send({
        message: "User updated successfully"
    });  
})

// Rota para remover usuario
userRoutes.delete("/user/:id", (request, response) => {
    const id =  request.params.id;
    const userIndex = users.findIndex(user => user.id === Number(id));
    
    users.splice(userIndex, 1);  

    return response.send({
        message: `User deleted successfully`
    });
})

module.exports = { userRoutes }