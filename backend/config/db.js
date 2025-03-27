const mongoose = require("mongoose");
require("dotenv").config();

function connectDB(){
    const mongoURI = process.env.MONGO_URL;  
    return mongoose.connect(mongoURI)
    .then(() => {
        console.log("DB Connected");
    })
    .catch((err) => {
        console.log("DB connection failed!");
        console.error(err);
    });
}

module.exports = connectDB;
