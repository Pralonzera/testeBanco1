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

//usuários.sync({force:true});



