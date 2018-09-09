const express = require('express');
const router = express.Router();

const curlUrl = require('../controllers/curlPageController')

router.post('/', (req, res) => {
    curlUrl(req.body)
    .then((body)=>{
        res.json({result:body})
    })
  });

module.exports = router;
