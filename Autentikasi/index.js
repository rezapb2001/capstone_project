const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 5000

app.use('/', (req, res) => {
    
    return res.send('berhasil');
})

app.listen(PORT, (req, res) => {
    console.log(`server run port ${PORT}`)
})