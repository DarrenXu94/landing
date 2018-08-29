const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // Do something here
    res.json({"Done":"DONE"})
  });

module.exports = router;
