const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate')
const ongController = require('./controllers/ong.controller');
const incidentController = require('./controllers/incident.controller');
const profileController = require('./controllers/profile.controller');
const sessionController = require('./controllers/session.controller');


const routes = express.Router();

routes.post('/sessions', sessionController.create);

routes.get('/ongs', ongController.index);
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)

    })
}), ongController.create);

routes.post('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), incidentController.create);
routes.get('/incidents', incidentController.index);
routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    }) 
}), incidentController.delete);

routes.get('/profile', profileController.index);

// routes.get('/profile', celebrate({
//     [Segments.HEADERS]: Joi.object({
//         Authorization: Joi.string().required(),
//     }).unknown(),
// }), profileController.index);


module.exports = routes;

/**
 * Rota/ Recurso
 */

/**
 * Métodos Http
 * GET: Buscar dados no backend
 * POST: Criar dado no backend
 * PUT: Alterar dado no backend
 * DELETE: Deletar dado no backend
 */

/**
 * Tipos de parâmetros
 *
 * Query Params: Parametros nomeados enviados na rota após "?" (filtros, paginação)
 * Route Params: Parametros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar e alterar recursos
 * SQL: MySQl, SQLite*, PostgreSQL
 * NoSQL: MongoDB, CouchDB
 */