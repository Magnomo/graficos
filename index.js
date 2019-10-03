const express = require('express')
const app = express();
const knex = require('knex')
const bodyParser = require('body-parser')

const db = knex({
    client:"mysql",
    connection:{
        host:"127.0.0.1",
        user:'root',
        password:"",
        database:'grafico'
    }
})

const path = require('path')
app.use(bodyParser.json())

app.set('views', path.join(__dirname, 'views'))
app.set('view engine','pug')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.get('/', (req,res,next)=>{
    res.render('index')
})
app.get('/all',(req,res,next)=>{
    db('user').then( dados=>{
        res.send(dados)
    },next)
})
app.post('/save', (req,res,next)=>{
    db('user').insert(req.body).then(dados=>{
        return res.send(dados)
    }, next)
})
app.listen(3000, function () {
    console.log("listen in port 3000")

})