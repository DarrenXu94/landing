const express = require('express');
const router = express.Router();

const getAllHistory = require('../controllers/chromeHistoryController')

router.get('/', (req, res) => {
    // Do something here
    getAllHistory()
    .then((listOfResults)=>{
      res.json({"Done":listOfResults})

    })
  });

module.exports = router;
