let express = require("express");
let router = express.Router();

router.get("/", async function (req, res) {
  console.log("Got request for /");

  res.send("This is backend");
});

module.exports = router;
