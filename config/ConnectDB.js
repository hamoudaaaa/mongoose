const mongoose = require("mongoose");
require("dotenv").config({ path: "./config/.env" });

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Data base is connecting");
    } catch (error) {
        console.log("data base is not connect", error);
    }
};
module.exports = connectDB;
