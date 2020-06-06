const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const customerSchema = require("./customer");
const productSchema = require("./product");
const customer = mongoose.Model("Customer", customerSchema);
const product = mongoose.Model("Product", productSchema);
const wishlistSchema = new Schema({
    product: { type: Schema.Types.ObjectId, ref: 'Product' },
    customer: { type: Schema.Types.ObjectId, ref: 'Customer' },
    last_date: { type: Date, default: Date.now },
})

module.exports = wishlistSchema;