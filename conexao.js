const Sequelize = require('sequelize')
const sequelize = new Sequelize('sistemadecadastro', 'root', 'v2a8l0d5o1f', {
    host: 'localhost',
    dialect: 'mysql' // dizer o tipo de banco de dado
})

sequelize.authenticate().then(function () {
    console.log('conectado com sucesso BD!')
}).catch(function (erro) {
    console.log('Falha ao se conectar a BD' + erro)
})