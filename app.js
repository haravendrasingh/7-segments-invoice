const express = require('express');
const app = express();

require('./app/services/middlewares')(app);

app.listen(5000, () => {
    console.log('App is running at ', 5000);
});