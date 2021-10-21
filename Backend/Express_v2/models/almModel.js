let almacenes = require('../data/almacenes');

almModel = {};

//CRUD
almModel.findAll = () => almacenes;

//READ
almModel.findById = (id) => almacenes.find(arr => arr.id == id);

//CREATE
almModel.post = (newArr) => {
    almacenes.push(newArr);
    return newArr;
}

//UPDATE
almModel.update = (newArr) => {
    let temp = almacenes.filter(arr => arr.id != newArr.id);
    temp.push(newArr);
    almacenes = temp;
    return newArr;
}

//DELETE
almModel.delete = (id) => {
    let temp = almacenes.filter(arr => arr.id != id);
    almacenes = temp;
    return `Registro ${id} eliminado correctamente`
}

module.exports = almModel;