const Product = require("../models/product");
const FeaturedProducts = require("../models/featured");

const getAllProducts = async (req, res) => {
    const {id, name, select} = req.query;
    const queryObject = {};
    let apiData = Product.find(queryObject); 

    if (id) {
        queryObject.id = id;
    }
    if (company) {
        queryObject.company = company;
    }

    if (featured) {
        queryObject.featured = featured;
    }   
    if (name) {
        queryObject.name = name;
    }
    if (name) {
        queryObject.name = { $regex:name, $options: "i" };
    }

    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 3;

    let skip = (page - 1) * limit;

    apiData = apiData.skip(skip).limit(limit);

    console.log(queryObject);

    if(select)  {
        let selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix);
    }

    const mahakal_main_line = await Product.find(queryObject).select("id name company price image description category featured").sort("id");
    res.status(200).json({mahakal_main_line, nHbits: mahakal_main_line.length});
};

const getAllFeaturedProducts = async (req, res) => {
    const {id, name, select} = req.query;
    const queryObject = {};
    let apiData = FeaturedProducts.find(queryObject); 

    if (id) {
        queryObject.id = id;
    }   
    if (name) {
        queryObject.name = name;
    }
    if (name) {
        queryObject.name = { $regex:name, $options: "i" };
    }

    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 3;

    let skip = (page - 1) * limit;

    apiData = apiData.skip(skip).limit(limit);

    console.log(queryObject);

    if(select)  {
        let selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix);
    }


    const mahakal_featured_line = await FeaturedProducts.find(queryObject).select("id name company price image description category featured").sort("id");
    res.status(200).json({mahakal_featured_line, nHbits: mahakal_featured_line.length});
};

module.exports = {getAllProducts, getAllFeaturedProducts};