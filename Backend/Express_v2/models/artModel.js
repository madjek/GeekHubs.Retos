let articulos = require('../data/articulos');

artModel = {};

//CRUD
artModel.findAll = () => articulos;

//READ
artModel.findById = (id) => articulos.find(arr => arr.id == id);

//CREATE
artModel.post = (newArr) => {
    articulos.push(newArr);
    return newArr;
}

//UPDATE
artModel.update = (newArr) => {
    let temp = articulos.filter(arr => arr.id != newArr.id);
    temp.push(newArr);
    articulos = temp;
    return newArr;
}

//DELETE
artModel.delete = (id) => {
    let temp = articulos.filter(arr => arr.id != id);
    articulos = temp;
    return `Registro ${id} eliminado correctamente`
}

module.exports = artModel;