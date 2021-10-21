const express = require('express');
const almRouter = express.Router();

const almController = require('../controllers/almController');

//CRUD
almRouter.get('/', almController.getAll);
almRouter.get('/:id', almController.getById);
almRouter.post('/', almController.create);
almRouter.put('/:id', almController.update);
almRouter.delete('/:id', almController.delete);

module.exports = almRouter;