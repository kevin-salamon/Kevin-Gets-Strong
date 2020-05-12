const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EntrySchema = new Schema({

});

const Entry = mongoose.model("Entry", EntrySchema);

module.exports = Entry;