import mongoose, { Schema } from "mongoose";
require('dotenv').config();

import CONSTANT from "../constants/constant"

mongoose.connect(CONSTANT.MONGO_URL);

const ProductSchema: Schema = new mongoose.Schema(
    {
        // id: { type: String, required: true, index: true },
        name: { type: String, },
        options: { type: Schema.Types.Mixed },
        defaultCurrency: { type: String, }, // "EUR
        availableCurrencies: { type: [String]} // ["EUR", "USD"]
    }
);

export const Product = mongoose.model("product", ProductSchema);