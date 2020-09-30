const express = require('express');
const router = express.Router();
//const Categoria = require('../app/models/category');
const mongoose = require('mongoose');
const { route } = require('./index-router');
const customerController = require("../controllers/customer-controller");

//rotas para cliente
//post localhost:3000/api/customer
router.post('/', customerController.post);

//get all localhost:3000/api/customer
router.get('/', customerController.getAll);

//get by id
router.get('/:customerId', customerController.getById);

//put
router.put('/:pcustomerId', customerController.put);

//delete
router.delete('/:customerId', customerController.delete);

module.exports = router;