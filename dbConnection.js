const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://abcd:abcd123@cluster0.r99leoa.mongodb.net/";
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

console.log("dbConnection.js is runing");

async function connectToDatabase() {     // Async function to connect to the MongoDB database
    try {
        await client.connect();    // Attempt to establish a connection to the MongoDB server
        console.log('Connected to the database');
    } catch (error) {
        console.error('Error connecting to the database:', error.message);
    }
}

function getClient() {  // Function to get the MongoDB client instance
    return client;
}

module.exports = { connectToDatabase, getClient };
