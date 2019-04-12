const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();


// Routes
require('../routes/testRoutes')(router);

module.exports = (app) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: false,
    }));


    app.use('/v1/app', router);

};