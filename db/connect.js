const mongoose = require("mongoose");

uri = "mongodb+srv://gautamphadnis2019:GautamPhadnis_MongoDB_MahakalStabakam_9326547401@mahakalstabakam.emjjnla.mongodb.net/?retryWrites=true&w=majority&appName=MahakalStabakam";

const connectDB = () => {
    return mongoose.connect(uri);
};

module.exports = connectDB;