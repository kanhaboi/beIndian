const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productSchema = require("./product");
const addressSchema = require("./address");
const product = mongoose.Model("Product", productSchema);
const sellerSchema = new Schema({
    name: { type: String, required: true },
    address: { type: addressSchema, required: true },
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
    description: { type: String },
})

module.exports = sellerSchema;