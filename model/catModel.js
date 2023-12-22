const { connectToDatabase, getClient } = require('../dbConnection');
// Import MongoDB connection functions

let catCollection;

async function runDBConnection() {    // Function to connect to the MongoDB database
    try {
        await connectToDatabase();      // Wait for the database connection to be established
        catCollection = getClient().db().collection('Cat');   // Retrieve a reference to the 'Cat' collection and assign it to catCollection
        console.log("catModel.js is running");
    } catch (ex) {
        console.error(ex);
    }
}

async function postCat(cat, callback) {     // Function to insert a cat's data into the Cat collection
    await runDBConnection();          // Ensure the database connection is established before posting
    catCollection.insertOne(cat, callback);
}

async function getAllCats(callback) {   // Function to retrieve all documents from the Cat collection
    await runDBConnection();     // Ensure the database connection is established before querying
    catCollection.find({}).toArray(callback);
}

//Export Module:
module.exports = {  
    runDBConnection,
    postCat,
    getAllCats
};
