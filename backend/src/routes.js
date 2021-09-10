const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController');

routes.get('/user', UserController.list);
routes.post('/user', UserController.create);


module.exports = routes;