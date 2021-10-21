const express = require('express');
const fabRouter = express.Router();

const fabController = require('../controllers/fabController');

//CRUD
fabRouter.get('/', fabController.getAll);
fabRouter.get('/:id', fabController.getById);
fabRouter.post('/', fabController.create);
fabRouter.put('/:id', fabController.update);
fabRouter.delete('/:id', fabController.delete);

module.exports = fabRouter;