require('dotenv').config()
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 5000
const RouteUser = require('./routes/User');
const mongoose = require('mongoose');

const URI = process.env.MONGO_URL
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

.then(res => {
    console.log('database terhubung')
})
.catch(e => {
    console.log('database tidak terhubung')
})

app.use(bodyParser.json());
app.use('/', RouteUser)

app.listen(PORT, (req, res) => {
    console.log(`server run port ${PORT}`)
})