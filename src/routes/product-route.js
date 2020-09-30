const express = require('express');
const router = express.Router();
//const Categoria = require('../app/models/category');
const mongoose = require('mongoose');
const { route } = require('./index-router');
const productController = require("../controllers/product-controller");
const authService = require('../services/auth-service');

//rotas para produto
//post localhost:3000/api/produtos
router.post('/', authService.authorize , productController.post);

//get all localhost:3000/api/produtos
router.get('/', productController.getAll);

//get by id
router.get('/:productId', productController.getById);

//put
router.put('/:productId', productController.put);

//delete
router.delete('/:productId', productController.delete);

module.exports = router;