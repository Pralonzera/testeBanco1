const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const handlebars = require('express-handlebars')

//config 

//template engine
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//bodyParser

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//conexao com banco
const Sequelize = require("sequelize");
const sequelize = new Sequelize('postgres://qnnuxnqa:gBrtlB4eO70C9kEdCW6YlJnmbciRiZ8v@salt.db.elephantsql.com:5432/qnnuxnqa');
sequelize.authenticate().then(function(){
console.log('Conectado com sucesso!')
}).catch(function(erro){console.log('erroo'+erro)})

const Postagem = sequelize.define('postagens', {
    titulo:{
        type: Sequelize.STRING},
    conteudo:{
        type: Sequelize.TEXT}
})

const users = sequelize.define('users', {
    nome:{
        type: Sequelize.STRING
    },
    sobrenonme:{
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    }
})

const usuários = sequelize.define('usuários', {
    nome:{
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    }
})

//rotas para o desespero total

app.get('/cada', function(req, res){
    res.render('formulario')
})

app.post('/umarota', function(req, res){

    users.create({
        nome: req.body.nome,
        sobrenonme: req.body.sobrenome,
        idade: req.body.idade
    })
    res.send('cadastrado')
    
})

app.listen(8081, function(){
    console.log("seridor rodando")
});


