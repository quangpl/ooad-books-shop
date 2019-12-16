let express = require("express");
let router = express.Router();

router.use("/client",require("./client"));
router.use("/admin", require("./admin"));


module.exports = router;
