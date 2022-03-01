const express = require('express');
const cors = require('cors');
const connection = require('./db');
const router = require('./routes/taskRoutes');

connection();
const app = express()
app.use(cors())

app.use('api/tasks',router);

const port=process.env.PORT||5000;
app.listen(port,()=>console.log('listening on port ${port}....'))
