const express = require('express');
const router = express.Router();

const emp = require('../models/empModel')
const empController = {};

empController.getAll = (req, res) => {
    res.json(emp.findAll());
};

empController.getById = (req, res) => {
    const {id} = req.params;
    res.json(emp.findById(id));
};

empController.create = (req, res) => {
    const {id, nombre, apellido, departamento} = req.body;
    const arr = {id, nombre, apellido, departamento};
    res.json(emp.post(arr));
};

empController.update = (req, res) => {
    const {id} = req.params;
    const {nombre, apellido, departamento} = req.body;
    let arr = {id, nombre, apellido, departamento};
    res.json(emp.update(arr));
};

empController.delete = (req, res) => {
    const {id} = req.params;
    res.json(emp.delete(id));
};

module.exports = empController;