const express = require('express');
const cors = require('cors');
const connection = require('./db');

connection();
const app = express()
app.use(cors())

const port=process.env.PORT||5000;
app.listen(port,()=>console.log('listening on port ${port}....'))
