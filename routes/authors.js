let express = require("express");
let router = express.Router();

// const { ObjectId } = require("mongodb");
const auth = require("../middleware/auth");
const AuthorsDB = require("../db/authorsDB.js");
// const QuotesDB = require("../db/quotesDB.js");

/* GET authors */
router.get("/", auth, async function (req, res) {
  console.log("Got request for /authors", req.user);

  // const userId = req.user.id;

  const query = req.query.q || {};
  const page = +req.query.page || 1;
  const pageSize = +req.query.pageSize || 10;

  try {
    const authors = await AuthorsDB.getAll(query, pageSize, page);

    res.status(200).json({ authors });
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

/* GET author by id */
router.get("/:authorId", auth, async function (req, res) {
  console.log("Got request for /authors/authorid");

  // const userId = req.user.id;
  const author_id = req.params.authorId;

  try {
    const author = await AuthorsDB.getAuthorById(author_id);

    res.status(200).json({ author });
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

/* POST update/create author */
router.post("/update", auth, async function (req, res) {
  console.log("Got request for /authors/update");

  const userId = req.user.id;
  const author = req.body;
  console.log("Got author", author);

  try {
    const result = await AuthorsDB.updateAuthor(author, userId);
    console.log("result", result);
    res.status(200).json(result);
  } catch (e) {
    console.log(e.message);
    res.status(400).json({ msg: e.message });
  }
});

/* POST delete author */
router.post("/delete", auth, async function (req, res) {
  console.log("Got request for /authors/delete");

  const author = req.body;
  console.log("Got author", author);

  try {
    const result = await AuthorsDB.deleteAuthor(author);

    res.status(200).json({ result });
  } catch (e) {
    console.log(e.message);
    res.status(400).json({ msg: e.message });
  }
});

module.exports = router;
