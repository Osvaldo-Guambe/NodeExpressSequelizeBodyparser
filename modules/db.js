const Sequelize = require('sequelize')

const sequelize = new Sequelize('sistemadecadastro', 'root', 'v2a8l0d5o1f', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(function () {
    console.log('conectado com sucesso a Base de Dados')
}).catch(function (erro) {
    console.log('Erro na conexao com base de dados' + erro)
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}