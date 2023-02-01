# Backend

This application is a REST API built using Node.js and express

## REST API structure

### Camadas

Routes -> controller -> service -> database
database -> service -> controller -> routes

- Routes - Responsavel por receber a requisicao HTTP do client
- Controller - Responsavel por fazer o controle de parametros, dados, validacoes recebidas do routes
- Service - Responsavel pela regra de negocio e pela comunicacao com o banco de dados
