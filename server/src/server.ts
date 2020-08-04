import express from 'express';
import cors from 'cors';

import routes from './routes';


// será a aplicação, tudo vai partir daqui
const app = express();

// por padrão o express não entende json, dessa forma ele passa a entender
app.use(express.json());
app.use(routes);
app.use(cors);

// ouvir requisições HTTP através de uma porta
app.listen(1337);

// GET: buscar ou listar informações
// POST: criar alguma nova informação
// PUT: alterar uma informação existente
// DELETE: excluir uma informação existente

// Corpo (Request Body): Dados para criação ou atualização de um registro
// Route Params: Identificar qual recurso eu quero atualizar ou deletar /users/:id
// Query Params: Paginação, filtros, ordenação

// app.get('/', (request, response) => {
//     return response.json({ message: "Hello World!" });
// });