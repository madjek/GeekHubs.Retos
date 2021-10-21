const express = require('express');
const router = express.Router();

const caj = require('../models/cajModel')
const cajController = {};

cajController.getAll = (req, res) => {
    res.json(caj.findAll());
};

cajController.getById = (req, res) => {
    const {id} = req.params;
    res.json(caj.findById(id));
};

cajController.create = (req, res) => {
    const {id, contenido, valor, almacen} = req.body;
    const arr = {id, contenido, valor, almacen};
    res.json(caj.post(arr));
};

cajController.update = (req, res) => {
    const {id} = req.params;
    const {contenido, valor, almacen} = req.body;
    let arr = {id, contenido, valor, almacen};
    res.json(caj.update(arr));
};

cajController.delete = (req, res) => {
    const {id} = req.params;
    res.json(caj.delete(id));
};

module.exports = cajController;