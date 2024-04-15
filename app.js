require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const cors = require('cors');

const PORT = process.env.PORT || 5000;

const products_routes = require("./routes/products");

app.get("/", (req, res) => {
    res.send("Namah Parvati-Pate Har Har Mahadev");
});

app.use("/api/products", products_routes);

app.use(cors({
    origin: 'http://localhost:3000' // Replace with your React app's URL for development
  }));

const start = async () => {
    try{
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => {
            console.log(`${PORT} : Jai Bholenath`);
        });
    }
    catch (error) {
        console.log(error);
    }
}

start();