const bcryptjs = require('bcryptjs');
const User = require('../models/user.model');


exports.DaftarUser = async (req, res) => {
    const { username, email, password } = req.body

    
    const hashPassword = await bcryptjs.hash(password, 10)
    const user = new User({
        username: username,
        email: email,
        password: hashPassword
    })

    user.save()

    return res.status(201).json({
        message: 'User berhasil di daftarkan',
    }) 
}