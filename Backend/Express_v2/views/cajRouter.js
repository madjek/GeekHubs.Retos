const express = require('express');
const cajRouter = express.Router();

const cajController = require('../controllers/cajController');

//CRUD
cajRouter.get('/', cajController.getAll);
cajRouter.get('/:id', cajController.getById);
cajRouter.post('/', cajController.create);
cajRouter.put('/:id', cajController.update);
cajRouter.delete('/:id', cajController.delete);

module.exports = cajRouter;