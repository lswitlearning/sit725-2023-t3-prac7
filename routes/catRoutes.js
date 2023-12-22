//Module Import
const express = require('express');
const catController = require('../controller/catController');
const router = express.Router();

console.log("catRoutes.js is runing");

router.get('/api/cats', catController.getAllCats);  //Route to retrieve information about all cats
router.post('/api/cat', catController.postCat);   //Route to add information about a new cat

module.exports = router;
