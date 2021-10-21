const express = require('express');
const depRouter = express.Router();

const depController = require('../controllers/depController');

//CRUD
depRouter.get('/', depController.getAll);
depRouter.get('/:id', depController.getById);
depRouter.post('/', depController.create);
depRouter.put('/:id', depController.update);
depRouter.delete('/:id', depController.delete);

module.exports = depRouter;