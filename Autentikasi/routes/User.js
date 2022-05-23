const express = require('express');
const router = express.Router()
const { DaftarUser } = require('../controller/user.controller');

router.post('/daftar', DaftarUser);

module.exports = router