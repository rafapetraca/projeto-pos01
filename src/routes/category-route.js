const express = require('express');
const router = express.Router();
const Categoria = require('../app/models/category');
const mongoose = require('mongoose');
const { route } = require('./index-router');

//rotas para categoria
//post localhost:3000/api/categorias
router.post('/', function (req, res) {
    const categoria = new Categoria();
    categoria.nome = req.body.nome;
    categoria.descricao = req.body.descricao;

    categoria.save(function (error) {
        if (error)
            res.send('Erro ao tentar salvar um novo categoria', error);

        res.status(201).json({ message: 'categoria inserido com sucesso' });
    });
});


//get all localhost:3000/api/categorias
router.get('/', function (req, res) {
    Categoria.find(function (err, prods) {
        if (err)
            res.send(err);

        res.status(200).json({
            message: "retorno ok de todos os categorias",
            allProducts: prods
        });
    });
});


//get by id
router.get('/:categoryId', function (req, res) {
    const id = req.params.categoryId;
    Categoria.findById(id, function (err, categoria) {
        if (err) {
            res.status(500).json({
                message: "Erro ao tentar encontrar categoria; ID mal formato",
            });
        } else if (categoria == null) {
            res.status(400).json({
                message: "Categoria não econtrado para o Id passado"
            });
        } else {
            res.status(200).json({
                message: "Categoria encontrado",
                categoria: categoria
            });
        }
    });
});

//put
router.put('/:categoryId', function (req, res) {
    const id = req.params.categoryId;
    console.log(id);
    Categoria.findById(id, function (err, categoria) {
        if (err) {
            res.status(500).json({
                message: "Erro ao tentar econtrar categoria, id mal formado"
            });
        } else if (categoria == null) {
            res.status(400).json({
                message: "Categoria nao econtrado para o id passado"
            });
        } else {
            categoria.nome = req.body.name;
            categoria.descricao = req.body.descricao;

            categoria.save(function (error) {
                if (error)
                    res.send("Erro ao entar atualizar o categoria", errror);

                res.status(200).json({
                    message: "categoria atualizado com sucesso"
                });
            });
        }
    });
});

//delete
router.delete('/:categoryId', function (req, res) {
    Categoria.findByIdAndRemove(req.params.categoryId, (err, categoria) => {
        if (err)
            res.status(500).send("Erro ao deletar ", err)

        const response = {
            message: "Categoria removido com sucesso",
            id: categoria.id
        };
        return res.status(200).send(response);
    });
});

module.exports = router;
