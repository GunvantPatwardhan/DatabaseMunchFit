require("dotenv").config();
const connectDB = require("./db/connect");
const Product = require("./models/product");
const FeaturedProduct = require("./models/featured");
const ProductJson = require("./products.json");
const FeaturedJson = require("./featured.json")
const start = async () => {
    try{
        await connectDB(process.env.MONGODB_URL);
        await Product.create(ProductJson);
        await FeaturedProduct.create(FeaturedJson);
        console.log("success");
    } catch (error){
        console.log(error);
    }
};

start();
