const express = require('express');
const router = express.Router();

const fab = require('../models/fabModel')
const fabController = {};

fabController.getAll = (req, res) => {
    res.json(fab.findAll());
};

fabController.getById = (req, res) => {
    const {id} = req.params;
    res.json(fab.findById(id));
};

fabController.create = (req, res) => {
    const {id, nombre} = req.body;
    const arr = {id, nombre};
    res.json(fab.post(arr));
};

fabController.update = (req, res) => {
    const {id} = req.params;
    const {nombre} = req.body;
    let arr = {id, nombre};
    res.json(fab.update(arr));
};

fabController.delete = (req, res) => {
    const {id} = req.params;
    res.json(fab.delete(id));
};

module.exports = fabController;