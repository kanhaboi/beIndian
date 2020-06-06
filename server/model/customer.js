const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const addressSchema = require("./address");


const customerSchema = new Schema({
    first_name: { type: String, required: true },
    middle_name: { type: String, required: false },
    last_name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    encoded_password: { type: String, required: true },
    mobile_number: { type: Number, required: true, unique: true },
    alternate_number: { type: Number, required: false },
    address: { type: addressSchema, required: true },
    date_of_birth: { type: Date },
})

module.exports = customerSchema;