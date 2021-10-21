let empleados = require('../data/empleados');

empModel = {};

//CRUD
empModel.findAll = () => empleados;

//READ
empModel.findById = (id) => empleados.find(arr => arr.id == id);

//CREATE
empModel.post = (newArr) => {
    empleados.push(newArr);
    return newArr;
}

//UPDATE
empModel.update = (newArr) => {
    let temp = empleados.filter(arr => arr.id != newArr.id);
    temp.push(newArr);
    empleados = temp;
    return newArr;
}

//DELETE
empModel.delete = (id) => {
    let temp = empleados.filter(arr => arr.id != id);
    empleados = temp;
    return `Registro ${id} eliminado correctamente`
}

module.exports = empModel;