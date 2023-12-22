let catModel = require('../model/catModel');    // Import the catModel module

console.log("catController.js is runing");

const getAllCats = (req, res) => {             // Function to get all cats' information
    catModel.getAllCats((err, result) => {          // Call the getAllCats method
        if (!err) {
            res.json({ statusCode: 200, data: result, message: 'get all cats successful' });
        }
    });
}

const postCat = (req, res)=> {           // Function to add a new cat's information
    let cat = req.body;
    catModel.postCat(cat, (err, result) => {
        if (!err) {
            res.json({ statusCode: 201, data: result, message: 'success' });
        }
    });
}

const deleteCat = (req,res) => {        // Function to delete a cat's information
    let cat = req.body;
    catModel.deleteOne(cat, (err,result) => {
        if (!err) {
            res.json({statusCode:201,data:result,message:'success'});
        }
    });
}

// Export the functions for use in other files
module.exports = { getAllCats, postCat };
