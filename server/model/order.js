const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const customerSchema = require("./customer");
const productSchema = require("./product");
const orderSchema = new Schema({
    product: { type: productSchema, required: true },
    customer: { type: customerSchema, required: true },
    last_date: { type: Date },
})

module.exports = orderSchema;