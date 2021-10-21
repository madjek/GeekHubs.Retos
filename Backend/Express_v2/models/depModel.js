let departamentos = require('../data/departamentos');

depModel = {};

//CRUD
depModel.findAll = () => departamentos;

//READ
depModel.findById = (id) => departamentos.find(arr => arr.id == id);

//CREATE
depModel.post = (newArr) => {
    departamentos.push(newArr);
    return newArr;
}

//UPDATE
depModel.update = (newArr) => {
    let temp = departamentos.filter(arr => arr.id != newArr.id);
    temp.push(newArr);
    departamentos = temp;
    return newArr;
}

//DELETE
depModel.delete = (id) => {
    let temp = departamentos.filter(arr => arr.id != id);
    departamentos = temp;
    return `Registro ${id} eliminado correctamente`
}

module.exports = depModel;