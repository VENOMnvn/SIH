const { model, Schema } = require("mongoose");
const mongoose = require('mongoose');

const caseSchema = mongoose.Schema(
    {
        lawyer: {
            type: String,
            required: true,
        },
        client: {
            type: String,
            required: true,
        },
        verdict: {
            type: String,  // pending, won or lose
        },
        fees: {
            type: Number,
        },
        location: {
            type: String,
        },
        dateStart: {
            type: Date,
            required: true,
        },
        dateEnd: {
            type: Date,
        }
    },
    {
        timestamps: true,
    }
);

const Case = mongoose.model("Case", caseSchema);
module.exports = Case;