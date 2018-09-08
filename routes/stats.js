const express = require('express');
const router = express.Router();

const getAllStats = require('../controllers/statsController')

router.get('/', (req, res) => {
    getAllStats()
    .then((listOfResults)=>{
      res.json(listOfResults)

    })
  });

module.exports = router;
