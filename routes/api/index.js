const router = require("express").Router();
const entryRoutes = require("./entries");

router.use("/entries", entryRoutes);

module.exports = router;
