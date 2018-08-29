const express = require('express');
const app = express();

const chromeHistory = require('./routes/chromeHistory')

app.use('/api/chromeHistory', chromeHistory);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
