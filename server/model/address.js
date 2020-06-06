const mongoose = require("mongoose");
const Schema = mongoose.Schema

const addressSchema = new Schema({
    address: { type: String, required: true },
    pincode: { type: Number, required: true },
    city: { type: String, required: true },
    district: { type: String, required: true },
    state: { type: String, required: true }
});
module.exports = addressSchema;