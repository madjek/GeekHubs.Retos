const express = require('express');
const router = express.Router();

const dep = require('../models/depModel')
const depController = {};

depController.getAll = (req, res) => {
    res.json(dep.findAll());
};

depController.getById = (req, res) => {
    const {id} = req.params;
    res.json(dep.findById(id));
};

depController.create = (req, res) => {
    const {id, nombre, presupuesto} = req.body;
    const arr = {id, nombre, presupuesto};
    res.json(dep.post(arr));
};

depController.update = (req, res) => {
    const {id} = req.params;
    const {nombre, presupuesto} = req.body;
    let arr = {id, nombre, presupuesto};
    res.json(dep.update(arr));
};

depController.delete = (req, res) => {
    const {id} = req.params;
    res.json(dep.delete(id));
};

module.exports = depController;