const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController');
const TaskController = require('./controllers/TaskController');

routes.get('/user', UserController.list);
routes.post('/user', UserController.create);

routes.get('/tasks', TaskController.list);
routes.post('/tasks', TaskController.create);
routes.delete('/tasks/:id', TaskController.delete);

module.exports = routes;