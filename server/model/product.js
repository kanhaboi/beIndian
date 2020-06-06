const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const sellerSchema = require("./seller");
const tagSchema = new Schema({
    tag: { type: String }
})
const seller = mongoose.Model("Seller", sellerSchema);

const imageSchema = new Schema({
    src: { type: String, required: true },
    width: { type: Number },
    height: { type: Number }
})
const variantSchema = new Schema({
    attributes: { type: Map, of: String },
    offer_price: { type: Number, required: true },
    actual_price: { type: Number, required: true },
    image: { type: [imageSchema] },
    stock: { type: Number, required: true }
})
const productSchema = new Schema({
    product_id: { type: String, required: true },
    title: { type: String, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, unique: true, required: true },
    variants: { type: [variantSchema] },
    seller: { type: Schema.Types.ObjectId, ref: "Seller" },
    tags: { type: [tagSchema] },
    last_updated: { type: Date, default: Date.now }
})

module.exports = productSchema;