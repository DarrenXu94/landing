const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const chromeHistory = require('./routes/chromeHistory')
const curlPage = require('./routes/curlPage')

app.use('/api/chromeHistory', chromeHistory);
app.use('/api/curlPage', curlPage);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
