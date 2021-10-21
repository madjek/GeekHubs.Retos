let fabricantes = require('../data/fabricantes');

fabModel = {};

//CRUD
fabModel.findAll = () => fabricantes;

//READ
fabModel.findById = (id) => fabricantes.find(arr => arr.id == id);

//CREATE
fabModel.post = (newArr) => {
    fabricantes.push(newArr);
    return newArr;
}

//UPDATE
fabModel.update = (newArr) => {
    let temp = fabricantes.filter(arr => arr.id != newArr.id);
    temp.push(newArr);
    fabricantes = temp;
    return newArr;
}

//DELETE
fabModel.delete = (id) => {
    let temp = fabricantes.filter(arr => arr.id != id);
    fabricantes = temp;
    return `Registro ${id} eliminado correctamente`
}

module.exports = fabModel;