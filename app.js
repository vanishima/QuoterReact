let express = require("express");
let path = require("path");
let cookieParser = require("cookie-parser");
let logger = require("morgan");

let indexRouter = require("./routes/index");
let quotesRouter = require("./routes/quotes");
let authRouter = require("./routes/auth");
let authorsRouter = require("./routes/authors");
let booksRouter = require("./routes/books");
let labelsRouter = require("./routes/labels");
let tagsRouter = require("./routes/tags");

let app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/auth", authRouter);
app.use("/quotes", quotesRouter);
app.use("/authors", authorsRouter);
app.use("/books", booksRouter);
app.use("/labels", labelsRouter);
app.use("/tags", tagsRouter);

module.exports = app;
