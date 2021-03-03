const mongoose = require('mongoose');
// const uniqueValidator = require('mongoose-unique-validator');


const ProductSchema = new mongoose.Schema({
    product_name: {
        type: String,
        lowercase: true,
        required: true

    },
    price: {
        type: String,
        required: true
    },
    paid: {
        type: Boolean

    },
    refund: {
        type: Boolean
    },

}, { timestamps: true });

// ProductSchema.plugin(uniqueValidator);
const Products = mongoose.model("algo8_products", ProductSchema);
module.exports = Products;