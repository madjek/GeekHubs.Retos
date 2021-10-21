const express = require('express');
const router = express.Router();

const alm = require('../models/almModel')
const almController = {};

almController.getAll = (req, res) => {
    res.json(alm.findAll());
};

almController.getById = (req, res) => {
    const {id} = req.params;
    res.json(alm.findById(id));
};

almController.create = (req, res) => {
    const {id, lugar, capacidad} = req.body;
    const arr = {id, lugar, capacidad};
    res.json(alm.post(arr));
};

almController.update = (req, res) => {
    const {id} = req.params;
    const {lugar, capacidad} = req.body;
    let arr = {id, lugar, capacidad};
    res.json(alm.update(arr));
};

almController.delete = (req, res) => {
    const {id} = req.params;
    res.json(alm.delete(id));
};

module.exports = almController;