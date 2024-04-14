const Product = require("../models/product");

const getAllProducts = async (req, res) => {
    const {id, name, select} = req.query;
    const queryObject = {};
    let apiData = Product.find(queryObject);

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

    const mahakal_main_line = await Product.find(queryObject).select("id name price category image description").sort("id");
    res.status(200).json({mahakal_main_line, nHbits: mahakal_main_line.length});
};

const getAllProductsTesting = async (req, res) => {
    const mahakal_line_testing = await Product.find(req.query);
    res.status(200).json({mahakal_line_testing});
};

module.exports = {getAllProducts, getAllProductsTesting};