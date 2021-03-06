const db = require("../models");

module.exports = {
  getSavedEntries: function(req, res) {
    db.Entry.find({}).then(dbEntryData => res.json(dbEntryData)).catch(err => {
      console.log(err);
      res.json(err);
    });
  },
  saveEntry: function(req, res) {
    db.Entry.create(req.body).then(dbEntryData => res.json(dbEntryData)).catch(err => {
      console.log(err);
      res.json(err);
    });
  },
  removeEntry: function(req, res) {
    db.Entry.remove({
      _id: req.params.id
    }).then(dbEntryData => res.json(dbEntryData)).catch(err => {
      console.log(err);
      res.json(err);
    });
  },
  updateEntry: function(req, res) {
    db.Entry.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(entryData => res.json(entryData)).catch(err => {
      console.log(err);
      res.json(err);
    });
  }
};
