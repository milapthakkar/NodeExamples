const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

require('./app/routes/contact.route')(app);

// Configuring the database
const dbConfig = require('./config/database.config.js');
const appConfig = require('./config/app.config.js');
const mongoose = require('mongoose');

//Custom
const port = process.env.PORT || appConfig.port;
const hostname = appConfig.hostname;

// Connecting to the database
mongoose.connect(dbConfig.url, {   
	useNewUrlParser: true
}).then(() => {
    console.log("Database connected successfully");    
}).catch(err => {
    console.log('Database connection failed', err);
    process.exit();
});

//app.use('/api/contacts', require('./api/contacts/routes/post_contact'));

// define a simple route
app.get('/', (req, res) => {
    res.status(200).json({"message": "Api Is Working."});
});

// listen for requests
app.listen(3000, () => {
    console.log(`Server is listening on port http://${hostname}:${port}`);
});