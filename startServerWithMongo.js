let express = require('express');
const catRoutes = require('./routes/catRoutes');
const catModel = require('./model/catModel');
const { connectToDatabase } = require('./dbConnection');


let app = express();
let port = process.env.port || 3000;


app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({extended: false}));

connectToDatabase(); // Connect to the MongoDB database, dbConnection.js 

app.use('/', catRoutes);   // Use the catRoutes for handling cat-related routes

app.listen(port, () => {
    console.log('express server started');
});

