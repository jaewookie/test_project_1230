var express = require('express')
var app = express()
var path = require ('path')
require('dotenv').config()
var ejs = require('ejs')
var bodyParser = require('body-parser')
var InsertRouter = require('./router/InsertRouter.js')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.json())
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname,'public')))

app.use(bodyParser.urlencoded({extended:false}))
app.use('/', InsertRouter)

var port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log(`Server is starting at http://localhost:${port}`)
})