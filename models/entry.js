const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var moment = require('moment');
var today = moment().format('L');
console.log(today); // confirmed as mm/dd/yyyy

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
        type: String
    },
    weight: {
        type: Number
    }
});

const Entry = mongoose.model("Entry", entrySchema);

module.exports = Entry;