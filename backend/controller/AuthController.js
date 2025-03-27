const bcrypt = require("bcryptjs")
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const { use } = require("../routes/AuthRouter");

const signup = async (req , res) => {
    try{
        const {name, email, phone, address, password} = req.body;
        const user = await User.findOne({ email });

        if(user){ // check if the user already exist
            return res.status(409).json({
                message: "User already exist, you can login",
                success: false
            });
        }

        let hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ // creating a new user
            name : name,
            email: email,
            phone: phone,
            address: address,
            password: hashedPassword
        });

        await newUser.save();
        res.status(201).json({
            message: "SignUp successfull",
            success: true
        });
    }
    catch(err){
        res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
}

const login = async (req , res) => {
    try{
        const {email, password} = req.body;
        const user = await User.findOne({ email });
        
        let errorMessage = "Authentication failed! Email or Password is wrong";

        if(!user){ // check if the user already exist
            return res.status(403).json({
                message: errorMessage,
                success: false
            });
        }

        const isPasswordEqual = await bcrypt.compare(password, user.password);
        if(!isPasswordEqual){
            return res.status(403).json({
                message: errorMessage,
                success: false
            });
        }

        const jwtToken = jwt.sign(
            {email: user.email, _id: user._id},
            process.env.JWT_SECRET,
            {expiresIn: "24h"}
        )

        res.status(200).json({
            message: "LogIn successfull",
            success: true,
            jwtToken,
            email,
            name: user.name
        });
    }
    catch(err){
        res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
}

module.exports = {signup, login};