const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const entrySchema = new Schema({
    date: {
        type: Date,
        default: Date.now()
    },
    calories: {
        type: Number
    },
    protein: {
        type: Number
    },
    workouts: {
        type: Array
    },
    weight: {
        type: Number
    }
});

const Entry = mongoose.model("Entry", entrySchema);

module.exports = Entry;