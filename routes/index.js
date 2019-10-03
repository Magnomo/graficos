const express = require('express')
const router = express.Router()
const knex = require('../db')


router.get('/', (req, res, next) => {
    res.render('index')
})
router.get('/all', (req, res, next) => {
    knex('user').then(dados => {
        res.send(dados)
    }, next)
})
router.post('/save', (req, res, next) => {
    knex('user').insert(req.body).then(dados => {
        return res.send(dados)
    }, next)
})
module.exports = router