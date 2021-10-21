const router = require('express').Router();

const almRouter = require('./views/almRouter');
router.use('/almacenes', almRouter);

const artRouter = require('./views/artRouter');
router.use('/articulos', artRouter);

const cajRouter = require('./views/cajRouter');
router.use('/cajas', cajRouter);

const depRouter = require('./views/depRouter');
router.use('/departamentos', depRouter);

const empRouter = require('./views/empRouter');
router.use('/empleados', empRouter);

const fabRouter = require('./views/fabRouter');
router.use('/fabricantes', fabRouter);

module.exports = router;