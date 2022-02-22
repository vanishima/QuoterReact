let express = require("express");
let router = express.Router();

const auth = require("../middleware/auth");
const User = require("../db/userDB.js");
const { ObjectId } = require("mongodb");

/* GET tags */
router.get("/", auth, async function (req, res) {
  console.log("Got request for /tags", req.user);

  try {
    const user = await User.findOne({ _id: ObjectId(req.user.id) });
    res.status(200).json({ tags: user.tags });
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

/* POST create tags */
router.post("/create", auth, async function (req, res) {
  console.log("Got request for /tags", req.user);
  const tag = req.body;
  const userId = req.user.id;
  console.log(tag);
  try {
    const result = await User.createTag(tag, userId);
    console.log("result");
    res.status(200).json({ ok: true });
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

module.exports = router;
