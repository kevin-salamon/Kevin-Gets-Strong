const router = require("express").Router();
const entryController = require("../../controllers/entryController");

router.route("/")
    .get(entryController.getSavedEntries)
    .post(entryController.saveEntry);

router.route("/:id")
    .delete(entryController.removeEntry);

module.exports = router;