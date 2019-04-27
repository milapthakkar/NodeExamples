const express = require('express')
const app = express()
const cors = require('cors');
const http = require('http')
const https = require('https')
const axios = require('axios');
const appConfig = require('./config/app.config.js');
const bodyParser = require('body-parser')
//Swagger
const swaggerUi = require('swagger-ui-express')
const swaggerJSDoc = require('swagger-jsdoc');

//Custom
const port = process.env.PORT || appConfig.port;
const hostname = appConfig.hostname;


var swaggerDefinition = {
    info: {
        title: 'Node Swagger API',
        version: '1.0.0'
    },
    host: `${hostname}:${port}`,
    basePath: '/api/',
};
var options = {
    // import swaggerDefinitions
    swaggerDefinition: swaggerDefinition,
    // path to the API docs
    apis: ['./api/*.js'],
};


//app.use('/', express.static('dist'));
app.use('/', express.static('../../dist'));
app.use('/api/service', require("./api/service"));
app.use('/api/help', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

//require('./routes')(app);

// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "*");
//     res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
//     next();
// });

app.get('/status', (req, res) => res.send('Api is working!!!'))

// define a simple route
app.get('/api', (req, res) => {res.status(200).send("Api Is Working.");});

// listen for requests
app.listen(port, () => {
    console.log(`Server is listening on port http://${hostname}:${port}`);
});

// const port = process.env.PORT || 3000;
// app.listen(port, () => console.log('App listening on port ' + port + '!'))