require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('helpers/jwt');
const errorHandler = require('helpers/error-handler');
const config = require('config.js');
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// use JWT auth to secure the api
app.use(jwt());

// api routes
app.use('/api/users', require('./users/users.controller'));

// global error handler
app.use(errorHandler);

// Connecting to the database
mongoose.connect(config.connectionString, {   
	useNewUrlParser: true
}).then(() => {
    console.log("Database connected successfully");    
}).catch(err => {
    console.log('Database connection failed', err);
    process.exit();
});

// define a simple route 
app.get('/', (req, res) => {
    res.status(200).send("Api Is Working.");
});

// start server
const port = process.env.PORT || config.port;
const hostname = config.hostname;
// listen for requests
app.listen(port, () => {
    console.log(`Server is listening on port http://${hostname}:${port}`);
}); 
