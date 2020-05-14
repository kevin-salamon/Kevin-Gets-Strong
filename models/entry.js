const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var moment = require('moment');
moment().format();
var today = moment().format('L');

const entrySchema = new Schema({
    date: {
        type: Date,
        default: today
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