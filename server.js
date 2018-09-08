const express = require('express');
const app = express();
const cors = require('cors')
app.use(cors())

const chromeHistory = require('./routes/chromeHistory')
const stats = require('./routes/stats')

app.use('/api/chromeHistory', chromeHistory);
app.use('/api/stats', stats);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
