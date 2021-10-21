let cajas = require('../data/cajas');

cajModel = {};

//CRUD
cajModel.findAll = () => cajas;

//READ
cajModel.findById = (id) => cajas.find(arr => arr.id == id);

//CREATE
cajModel.post = (newArr) => {
    cajas.push(newArr);
    return newArr;
}

//UPDATE
cajModel.update = (newArr) => {
    let temp = cajas.filter(arr => arr.id != newArr.id);
    temp.push(newArr);
    cajas = temp;
    return newArr;
}

//DELETE
cajModel.delete = (id) => {
    let temp = cajas.filter(arr => arr.id != id);
    cajas = temp;
    return `Registro ${id} eliminado correctamente`
}

module.exports = cajModel;