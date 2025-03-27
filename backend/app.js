const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/AuthRouter");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
connectDB();

app.get("/", (req, res) => {
    res.send("<h1>Welcome to Home Page</h1>");
})

app.use("/api/auth", authRoutes);


const PORT = process.env.PORT;
app.listen(
    PORT, () => console.log(`Server is running on ${PORT}`)
);
