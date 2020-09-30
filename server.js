// importando pacotes
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//configurar o app para usar o body-parser e tranformar as requisicoes em json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Persistencias
const connection_string = "mongodb+srv://rafaelPetraca:1234@cluster0.hwnbi.mongodb.net/bdpos?retryWrites=true&w=majority";
mongoose.connect(connection_string, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

//Definir porta onde o server vai responder 
const port = process.env.PORT || 3000;

//definir as rotar
const router = express.Router(); //intercepta todas as rotas 
const productRoute = require('./src/routes/product-route');
const customerRoute = require('./src/routes/customer-route');
//const categoryRoute = require('./src/routes/category-route');
const indexRoute = require('./src/routes/index-router');
const loginRoute = require('./src/routes/login-route');


//vincular a aplicacao (app) com o motor de rotas do express
// /api é o caminho padrao para as apis rest
//rota principal
app.use('/api', indexRoute);


//rota para produto
app.use('/api/produtos/', productRoute);
//rota para customer
app.use('/api/customer/', customerRoute);
//app.use('/api/categorias/', categoryRoute);
app.use('/api/login/', loginRoute);

app.listen(port, () => {
    console.log("server is up and running... ", port);
});
