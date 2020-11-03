//// native modules
    const express = require('express');
    const bodyParser =  require('body-parser')
    const handlebars = require('express-handlebars')
    const path = require('path')
    const app = express();
//// modules
    const router = require('./routes/router')

//// config
    const PORT = 1213
    
    // bodyparser
        app.use(bodyParser.urlencoded({extended: true}))
        app.use(bodyParser.json())
    
    // handlebars
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
    
    

    // Public
        app.use(express.static(path.join(__dirname, 'public')))// caminho absoluta para o 'public' 
    
    // route
    app.use('/', router) 

//// conection
    app.listen(PORT, ()=> {
        console.log('Application [started]')
    })