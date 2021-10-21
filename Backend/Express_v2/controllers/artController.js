const express = require('express');
const router = express.Router();

const art = require('../models/artModel')
const artController = {};

artController.getAll = (req, res) => {
    res.json(art.findAll());
};

artController.getById = (req, res) => {
    const {id} = req.params;
    res.json(art.findById(id));
};

artController.create = (req, res) => {
    const {id, nombre, precio, fabricante} = req.body;
    const arr = {id, nombre, precio, fabricante};
    res.json(art.post(arr));
};

artController.update = (req, res) => {
    const {id} = req.params;
    const {nombre, precio, fabricante} = req.body;
    let arr = {id, nombre, precio, fabricante};
    res.json(art.update(arr));
};

artController.delete = (req, res) => {
    const {id} = req.params;
    res.json(art.delete(id));
};

module.exports = artController;