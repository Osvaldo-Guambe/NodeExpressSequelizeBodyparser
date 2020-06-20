const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./modules/Post')

//config tamplate engine
app.engine('handlebars', handlebars({
    defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')
//config bodyparser
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())
//rotas
app.get('/', function (req, res) {
    Post.findAll({
        order: [
            ['id', 'DESC']
        ]
    }).then(function (lista) {
        res.render('home', {
            dados: lista
        })
    })

})

app.get('/cadastro', function (req, res) {
    res.render('formulario')
})

app.post('/add', function (req, res) {
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function () {
        //res.send('Dados Gravados com Sucesso!')
        res.redirect('/')
    }).catch(function (erro) {
        res.send('Erro na gravacao de dados' + erro)
    })

})

app.get('/deletar/:id', function (req, res) {
    Post.destroy({
        where: {
            'id': req.params.id
        }
    }).then(function () {
        res.send('Linha Pagada com Sucesso!')
    }).catch(function (erro) {
        res.send('Esta postagem nao exite!')
    })

})

app.listen(8080, console.log("servidor está operacional, porta:8080")) // esta funcao tem que sem a ultima 