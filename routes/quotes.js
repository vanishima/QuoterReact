let express = require("express");
let router = express.Router();

const { ObjectId } = require("mongodb");
const auth = require("../middleware/auth");
const QuotesDB = require("../db/quotesDB.js");

/* GET quotes */
router.get("/", auth, async function (req, res) {
  console.log("Got request for /quotes", req.query);

  const userId = req.user.id;

  const userid_query = { "user._id": ObjectId(userId) };
  const page = +req.query.page || 1;
  const pageSize = +req.query.pagesize || 0;
  const bookid_query =
    req.query.bookid !== "undefined"
      ? { "book._id": ObjectId(req.query.bookid) }
      : null;
  const sortorder = req.query.sortorder || "latest";
  console.log("sortoder", sortorder);

  try {
    const total = await QuotesDB.getQuotesCount(userid_query);
    const quotes = await QuotesDB.getQuotes(
      userid_query,
      pageSize,
      page,
      bookid_query,
      sortorder
    );

    const lastPage = await Math.ceil(total / pageSize);
    console.log("total", total);
    console.log("lastPage", lastPage);
    console.log("page", page);

    res.status(200).json({
      quotes,
      currentPage: page,
      lastPage: lastPage,
    });
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

/* GET recent books */
router.get("/books", auth, async function (req, res) {
  console.log("Got request for /quotes/books");

  const userId = req.user.id;
  const sortoder = req.query.sortorder || "latest";
  const limit = parseInt(req.query.limit) || 0;
  console.log("req.query.getdetails", req.query.getdetails);
  const getDetails = req.query.getdetails === "true";

  try {
    const books = await QuotesDB.getBooksDashboard(
      userId,
      limit,
      sortoder,
      getDetails
    );
    console.log("Got books", books);

    res.status(200).json({
      books,
    });
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

/* GET recent authors */
router.get("/authors", auth, async function (req, res) {
  console.log("Got request for /quotes/authors");

  const userId = req.user.id;
  const sortoder = req.query.sortorder || "latest";
  const limit = parseInt(req.query.limit) || null;

  console.log("sortoder", sortoder);
  console.log("limit", limit);

  try {
    const authors = await QuotesDB.getAuthorDashboard(userId, limit, sortoder);
    console.log("Got authors", authors);

    res.status(200).json({
      authors,
    });
  } catch (e) {
    console.log(e.message);
    res.status(400).json({ msg: e.message });
  }
});

/* POST create quote */
router.post("/create", auth, async function (req, res) {
  console.log("Got post quotes/create");

  const quote = req.body;
  const user = req.user;

  quote.author._id = ObjectId(quote.author._id);
  quote.book._id = ObjectId(quote.book._id);
  quote.user = { _id: ObjectId(user.id), name: user.name };
  quote.date = new Date(quote.date);

  if (quote.memo) {
    quote.memo[0].userID = ObjectId(quote.memo[0].userID);
    quote.memo[0].date = new Date(quote.memo[0].date);
  }

  // console.log(quote);

  try {
    const result = await QuotesDB.createQuote(quote);
    console.log("Quote created");
    res.status(200).json({
      result,
    });
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

/* POST delete quote */
router.post("/delete/:quoteId", auth, async function (req, res) {
  console.log("Got post quotes/delete");

  const quoteId = req.params.quoteId;

  try {
    const result = await QuotesDB.deleteQuoteById(quoteId);
    console.log("Quote deleted");
    res.status(200).json({
      result,
    });
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

/* GET quote by id */
router.get("/:quoteId", auth, async function (req, res) {
  console.log("Got request for /", req.user);

  const quoteId = req.params.quoteId;

  try {
    const quote = await QuotesDB.getQuoteById(quoteId);

    res.status(200).json({
      quote,
    });
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

/* GET quote by id */
router.post("/update", auth, async function (req, res) {
  console.log("Got request for /", req.user);

  const quote = req.body;
  const user = req.user;

  quote.user._id = ObjectId(user.id);
  quote.author._id = ObjectId(quote.author._id);
  quote.book._id = ObjectId(quote.book._id);

  quote.date = new Date(quote.date);

  // if (quote.memo) {
  //   for (let m of quote.memo) {
  //     m.user._id = ObjectId(m.user._id);
  //     m.date = new Date(m.date);
  //     m._id = new ObjectId();
  //   }
  // }

  quote.memo = quote.memo.map(m => {
    m._id = new ObjectId();
    m.user._id = ObjectId(m.user._id);
    m.date = new Date(m.date);
    return m;
  });

  console.log("ready to feed into DB", quote.memo);

  try {
    const result = await QuotesDB.updateQuote(quote);

    res.status(200).json(result);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

module.exports = router;
