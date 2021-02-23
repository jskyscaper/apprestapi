const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var routes = require('./routes');
routes(app);

app.listen(8090, () => {
    console.log(`Server started on port`);
});