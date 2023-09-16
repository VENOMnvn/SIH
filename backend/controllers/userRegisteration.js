const User = require('../MongoDB/UserSchema.js');
const ProfessionModel = require('../MongoDB/professionSchema.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const maxAge = 3 * 24 * 60 * 60;  // 3 days


const userRegisteration = async (req, res) => {

    const {
            name, 
            number,
            email,
            password ,
            occupation,
            dob,
            IsServiceProvider,
            location,
            language,
            Experience,
            BarNumber,
            Category} = req.body
    
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
                    profession:occupation,
                    dob,
                    IsServiceProvider,
                    language,
                })

                const user = await doc.save()
                
                const userProfession = new ProfessionModel({
                    userid : user._id,
                    Category,
                    Experience,
                    BarNumber,
                    Occupation:occupation,
                    name
                });

                const resByProffesion = await userProfession.save();
                const resByUser = await User.findByIdAndUpdate(user._id,{professionDetails : userProfession._id}); 


                const UserData = await User.findById(user._id);
                const ProfessionData = await ProfessionModel.findById(resByProffesion._id);
                 
                console.log(resByProffesion,ProfessionData,resByProffesion);

                const token = jwt.sign({ userID: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '3d' })

                res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 })
                
                res.send({
                    message : "Ok",
                    UserData,
                    ProfessionData
                });

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