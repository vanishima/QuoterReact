let express = require("express");
let router = express.Router();

const auth = require("../middleware/auth");
const BooksDB = require("../db/booksDB.js");

/* GET books */
// router.get("/", auth, async function (req, res) {
//   console.log("Got request for /books", req.user);

//   const authorId = req.query.authorId || "undefined";
//   const page = +req.query.page || 1;
//   const pageSize = +req.query.pageSize || null;

//   try {
//     const books = await BooksDB.getAll(authorId, pageSize, page);

//     res.status(200).json({ books });
//   } catch (e) {
//     res.status(400).json({ msg: e.message });
//   }
// });

/* GET books */
router.get("/", auth, async function (req, res) {
  console.log("Got request for /books", req.user);

  const userId = req.user.id;

  try {
    const books = await BooksDB.getRecentBooks(userId);

    res.status(200).json({ books });
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

/* GET books by id */
router.get("/:bookId", auth, async function (req, res) {
  console.log("Got request for /books/bookId");

  // const userId = req.user.id;
  const book_id = req.params.bookId;

  try {
    const book = await BooksDB.getBookById(book_id);

    res.status(200).json({ book });
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

/* POST update or create book */
router.post("/update", auth, async (req, res) => {
  console.log("Got request for /books/update", req.body);

  const book = req.body;
  const userId = req.user.id;

  try {
    const result = await BooksDB.updateBook(book, userId);
    console.log("/books/update", result);
    res.status(200).json(result);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

/* POST delete book */
router.post("/delete", auth, async (req, res) => {
  console.log("Got request for /books/delete");

  const book = req.body;

  try {
    const result = await BooksDB.deleteBookById(book._id);
    res.status(200).json({ result });
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

module.exports = router;
