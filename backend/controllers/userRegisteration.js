const User = require('../MongoDB/UserSchema.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const maxAge = 3 * 24 * 60 * 60;  // 3 days


const userRegisteration = async (req, res) => {

    const { name, number, email, password, location  } = req.body
    
    const user = await User.findOne({ email: email })
    if (user) {
        res.send({ "status": "failed", "message": "Email already exists" })
    } else {
        if (name && number && email && password && location) {
            try {
                const salt = await bcrypt.genSalt(10)
                const hashPassword = await bcrypt.hash(password, salt)
                const doc = new User({
                    name: name,
                    number: number,
                    email: email,
                    password: hashPassword,
                    location: location,
                    profession:"Lawyer"
                })
                const user = await doc.save()
                const token = jwt.sign({ userID: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '3d' })
                res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 })
                // res.redirect('/');
                res.send('regristration successful');

            } catch (error) {
                console.log(error)
                res.send({ "status": "failed", "message": "Unable to Register" })
            }

        } else {
            console.log(name,email,location,password,number);
            res.send({ "status": "failed", "message": "All fields ar required" })
        }
    }
}

module.exports = userRegisteration;