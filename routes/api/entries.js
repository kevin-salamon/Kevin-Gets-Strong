const router = require("express").Router();
const entryController = require("../../controllers/entryController");

router.route("/")
    .get(entryController.getSavedEntries)
    .post(entryController.saveEntry);

router.route("/:id")
    .delete(entryController.removeEntry)
    .put(entryController.updateEntry);

module.exports = router;