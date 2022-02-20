const express = require("express");
const path = require("path");
const {engine} = require("express-handlebars");
const app = express();
const bodyParser = require('body-parser')
const apiRoutes = require('./Routes/apiRoutes/apiRoutes')

//default setup
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Engine setup
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', 'hbs');
app.engine('hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));

//Routes setup
app.use(apiRoutes);

app.listen(5200, () => {
    console.log('Server has started on port 5200')
})