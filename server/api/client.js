let express = require("express");
let router = express.Router();
const {authCustomer} = require("../utils/secure")
router.get("/", async function(req, res, next) {
  authCustomer(req, res, next);
});

module.exports = router;
