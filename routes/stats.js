const express = require('express');
const router = express.Router();

const getAllStats = require('../controllers/statsController')

router.get('/', (req, res) => {
    // Do something here
    getAllStats()
    .then((listOfResults)=>{
      res.json({"Done":listOfResults})

    })
  });

module.exports = router;
