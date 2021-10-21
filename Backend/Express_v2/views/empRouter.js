const express = require('express');
const empRouter = express.Router();

const empController = require('../controllers/empController');

//CRUD
empRouter.get('/', empController.getAll);
empRouter.get('/:id', empController.getById);
empRouter.post('/', empController.create);
empRouter.put('/:id', empController.update);
empRouter.delete('/:id', empController.delete);

module.exports = empRouter;