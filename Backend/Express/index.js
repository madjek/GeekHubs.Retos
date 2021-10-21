/* Author: Yevhenii Madzhar */
/* Version: 1.0 */

const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const logger = require('./config/winston');

const app = express();
const PORT = 3000;

//Middleware
app.use(morgan('combined', { stream: logger.stream }));
app.use(express.json());

//------EJERCICIO 1------
let fabricantes = [
    {id:1, nombre: 'Sony'},
    {id:2, nombre: 'Creative Labs'},
    {id:3, nombre: 'Iomega'},
    {id:4, nombre: 'Fujitsu'}
];

let articulos = [
    {id:1, nombre: 'Hard drive', precio: 240, fabricante: 3},
    {id:2, nombre: 'Memory', precio: 120, fabricante: 4},
    {id:3, nombre: 'Monitor', precio: 350, fabricante: 1},
    {id:4, nombre: 'DVD drive', precio: 180, fabricante: 2},
    {id:5, nombre: 'Printer', precio: 270, fabricante: 3},
    {id:6, nombre: 'DVD burner', precio: 150, fabricante: 2}
];

//CRUD
app.get('/articulos', (req, res) => {
    res.json(articulos);
});
app.get('/fabricantes', (req, res) => {
    res.json(fabricantes);
});

//READ
app.get('/articulos/:id', (req, res) => {
    const {id} = req.params;
    let articulo = articulos.find(articulo => articulo.id == id);
    res.json(articulo);
});

app.get('/fabricantes/:id', (req, res) => {
    const {id} = req.params;
    let fabricante = fabricantes.find(fabricante => fabricante.id == id);
    res.json(fabricante);
});

//CREATE
app.post('/articulos', (req, res) => {
    const {id, nombre, precio, fabricante} = req.body;
    const articulo = {id, nombre, precio, fabricante};
    articulos.push(articulo);
    res.json(articulo);
});

app.post('/fabricantes', (req, res) => {
    const {id, nombre} = req.body;
    const fabricante = {id, nombre};
    fabricantes.push(fabricante);
    res.json(fabricante);
});

//UPDATE
app.put('/articulos:id', (req, res) => {
    const {id} = req.params;
    const {nombre} = req.body;
    const {precio} = req.body;
    const {fabricante} = req.body;
    let artTemp = articulos.filter(articulo => articulo.id != id);
    let articulo = {id, nombre, precio, fabricante};
    artTemp.push(articulo);
    articulos = artTemp;
    res.json(articulo);
});

app.put('/fabricantes:id', (req, res) => {
    const {id} = req.params;
    const {nombre} = req.body;
    let fabTemp = fabricantes.filter(fabricante => fabricante.id != id);
    let fabricante = {id, nombre};
    fabTemp.push(fabricante);
    fabricantes = fabTemp;
    res.json(fabricante);
})

//DELETE
app.delete('/articulos/:id', (req, res) => {
    const {id} = req.params;
    let artTemp = articulos.filter(articulo => articulo.id != id);
    articulos = artTemp;
    res.send(`Registro ${id} eliminado`);
})

app.delete('/fabricantes/:id', (req, res) => {
    const {id} = req.params;
    let fabTemp = fabricantes.filter(articulo => articulo.id != id);
    fabricantes = fabTemp;
    res.send(`Registro ${id} eliminado`);
})

//------EJERCICIO 2------
let departamentos = [
    {id:14, nombre: 'IT', presupuesto: 60000},
    {id:37, nombre: 'Accounting', presupuesto: 20000},
    {id:59, nombre: 'Human Resources', presupuesto: 100000},
];

let empleados = [
    {id:123234877, nombre: 'Michael', apellido: 'Rogers', departamento: 14},
    {id:152934485, nombre: 'Anand', apellido: 'Manikutty', departamento: 14},
    {id:222364883, nombre: 'Carol', apellido: 'Smith', departamento: 37},
    {id:326587417, nombre: 'Joe', apellido: 'Stevens', departamento: 37},
    {id:654873219, nombre: 'Zacary', apellido: 'Efron', departamento: 59},
    {id:745685214, nombre: 'Eric', apellido: 'Goldsmith', departamento: 59}
];

//CRUD
app.get('/empleados', (req, res) => {
    res.json(empleados);
});
app.get('/departamentos', (req, res) => {
    res.json(departamentos);
});

//READ
app.get('/empleados/:id', (req, res) => {
    const {id} = req.params;
    let empleado = empleados.find(empleado => empleado.id == id);
    res.json(empleado);
});

app.get('/departamentos/:id', (req, res) => {
    const {id} = req.params;
    let departamento = departamentos.find(departamento => departamento.id == id);
    res.json(departamento);
});

//CREATE
app.post('/empleados', (req, res) => {
    const {id, nombre, apellido, departamento} = req.body;
    const empleado = {id, nombre, apellido, departamento};
    empleados.push(empleado);
    res.json(empleado);
});

app.post('/departamentos', (req, res) => {
    const {id, nombre, prsupuesto} = req.body;
    const departamento = {id, nombre, prsupuesto};
    departamentos.push(departamento);
    res.json(departamento);
});

//UPDATE
app.put('/empleados:id', (req, res) => {
    const {id} = req.params;
    const {nombre} = req.body;
    const {apellido} = req.body;
    const {departamento} = req.body;
    let empTemp = empleados.filter(empleado => empleado.id != id);
    let empleado = {id, nombre, apellido, departamento};
    empTemp.push(empleado);
    empleados = empTemp;
    res.json(empleado);
});

app.put('/departamentos:id', (req, res) => {
    const {id} = req.params;
    const {nombre} = req.body;
    const {prsupuesto} = req.body;
    let depTemp = departamentos.filter(departamento => departamento.id != id);
    let departamento = {id, nombre, prsupuesto};
    depTemp.push(departamento);
    departamentos = depTemp;
    res.json(departamento);
})

//DELETE
app.delete('/empleados/:id', (req, res) => {
    const {id} = req.params;
    let empTemp = empleados.filter(empleado => empleado.id != id);
    empleados = empTemp;
    res.send(`Registro ${id} eliminado`);
})

app.delete('/departamentos/:id', (req, res) => {
    const {id} = req.params;
    let depTemp = departamentos.filter(departamento => departamento.id != id);
    departamentos = depTemp;
    res.send(`Registro ${id} eliminado`);
})

//------EJERCICIO 3------
let almacenes = [
    {id:1, lugar: 'Valencia', capacidad: 3},
    {id:2, lugar: 'Barcelona', capacidad: 4},
    {id:3, lugar: 'Bilbao', capacidad: 5},
    {id:4, lugar: 'Los Angeles', capacidad: 2},
];

let cajas = [
    {id:'0MN7', contenido: 'Rocks', valor: 180, almacen: 3},
    {id:'4H8P', contenido: 'Rocks', valor: 250, almacen: 1},
    {id:'4RT3', contenido: 'Scissors', valor: 190, almacen: 4},
    {id:'P0H6', contenido: 'Scissors', valor: 150, almacen: 2},
    {id:'8JN6', contenido: 'Papers', valor: 75, almacen: 1},
    {id:'8Y6U', contenido: 'Papers', valor: 50, almacen: 3}
];

//CRUD
app.get('/cajas', (req, res) => {
    res.json(cajas);
});
app.get('/almacenes', (req, res) => {
    res.json(almacenes);
});

//READ
app.get('/cajas/:id', (req, res) => {
    const {id} = req.params;
    let caja = cajas.find(caja => caja.id == id);
    res.json(caja);
});

app.get('/almacenes/:id', (req, res) => {
    const {id} = req.params;
    let almacen = almacenes.find(almacen => almacen.id == id);
    res.json(almacen);
});

//CREATE
app.post('/cajas', (req, res) => {
    const {id, contenido, valor, almacen} = req.body;
    const caja = {id, contenido, valor, almacen};
    cajas.push(caja);
    res.json(caja);
});

app.post('/almacenes', (req, res) => {
    const {id, lugar, capacidad} = req.body;
    const almacen = {id, lugar, capacidad};
    almacenes.push(almacen);
    res.json(almacen);
});

//UPDATE
app.put('/cajas:id', (req, res) => {
    const {id} = req.params;
    const {contenido} = req.body;
    const {valor} = req.body;
    const {almacen} = req.body;
    let cajaTemp = cajas.filter(caja => caja.id != id);
    let caja = {id, contenido, valor, almacen};
    cajaTemp.push(caja);
    cajas = cajaTemp;
    res.json(caja);
});

app.put('/almacenes:id', (req, res) => {
    const {id} = req.params;
    const {lugar} = req.body;
    const {capacidad} = req.body;
    let almTemp = almacenes.filter(almacen => almacen.id != id);
    let almacen = {id, lugar, capacidad};
    almTemp.push(almacen);
    almacenes = almTemp;
    res.json(almacen);
})

//DELETE
app.delete('/cajas/:id', (req, res) => {
    const {id} = req.params;
    let cajaTemp = cajas.filter(caja => caja.id != id);
    cajas = cajaTemp;
    res.send(`Registro ${id} eliminado`);
})

app.delete('/almacenes/:id', (req, res) => {
    const {id} = req.params;
    let almTemp = almacenes.filter(almacen => almacen.id != id);
    almacenes = almTemp;
    res.send(`Registro ${id} eliminado`);
})

//SERVER
app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`.bgGreen.black);
});