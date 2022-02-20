let express = require("express");
let router = express.Router();

const auth = require("../middleware/auth");
const User = require("../db/userDB.js");
const { ObjectId } = require("mongodb");

/* GET labels */
router.get("/", auth, async function (req, res) {
  console.log("Got request for /labels", req.user);

  try {
    const user = await User.findOne({ _id: ObjectId(req.user.id) });
    res.status(200).json({ labels: user.labels });
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

/* POST create labels */
router.post("/create", auth, async function (req, res) {
  console.log("Got request for /labels", req.user);
  const label = req.body;
  const userId = req.user.id;
  console.log(label);
  try {
    const result = await User.createLabel(label, userId);
    console.log("result");
    res.status(200).json({ ok: true });
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

module.exports = router;
