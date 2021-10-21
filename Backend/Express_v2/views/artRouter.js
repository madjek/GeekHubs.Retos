const express = require('express');
const artRouter = express.Router();

const artController = require('../controllers/artController');

//CRUD
artRouter.get('/', artController.getAll);
artRouter.get('/:id', artController.getById);
artRouter.post('/', artController.create);
artRouter.put('/:id', artController.update);
artRouter.delete('/:id', artController.delete);

module.exports = artRouter;