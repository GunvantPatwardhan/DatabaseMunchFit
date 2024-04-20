const express = require("express");
const router = express.Router();

const {getAllProducts, getAllFeaturedProducts} = require("../controllers/products")

router.route("/").get(getAllProducts);
router.route("/featured").get(getAllFeaturedProducts);


module.exports = router;