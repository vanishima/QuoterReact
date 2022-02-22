const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config();

function QuotesDB() {
  const myDB = {};
  const DB_NAME = "quoter2";
  const uri = process.env.MONGO_URI;
  const COL_QUOTES = "Quotes";

  const sort_dict = {
    latest: { date: -1 },
    most: { count: -1 },
    recent: { quote_id: -1 },
  };

  const sort_dict_quotes = {
    latest: { date: -1 },
    recent: { _id: -1 },
  };

  myDB.getQuotes = async (
    userid_query = {},
    pageSize,
    page = 1,
    bookid_query = {},
    sortorder = "latest"
  ) => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    console.log("[getQuotes] Connecting to the db");

    try {
      await client.connect();
      console.log("Connected!");

      const db = client.db(DB_NAME);
      const quotesCol = db.collection(COL_QUOTES);

      console.log(
        "Collection ready, querying with ",
        userid_query,
        pageSize,
        page,
        bookid_query
      );

      const match_query = bookid_query
        ? { $and: [userid_query, bookid_query] }
        : userid_query;

      const sort_query = sort_dict_quotes[sortorder];

      let query_arr = [{ $match: match_query }];
      query_arr.push({ $sort: sort_query });
      query_arr.push({ $skip: pageSize * (page - 1) });

      // const query_arr = [
      //   { $match: match_query },
      //   { $sort: { date: -1 } },
      //   { $skip: pageSize * (page - 1) },
      // ];

      if (pageSize > 0) {
        query_arr.push({ $limit: pageSize });
      }

      const quotes = await quotesCol.aggregate(query_arr).toArray();

      console.log("Found quotes", quotes.length);

      return quotes;
    } finally {
      console.log("Closing the connection");
      client.close();
    }
  };

  myDB.getQuotesCount = async (query = {}) => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    console.log("Connecting to the db");

    try {
      await client.connect();
      console.log("Connected!");

      const db = client.db(DB_NAME);
      const quotesCol = db.collection(COL_QUOTES);
      console.log("Collection ready, querying with ", query);
      query["user._id"] = ObjectId(query["user._id"]);

      const count = await quotesCol.find(query).count();
      return count;
    } finally {
      console.log("Closing the connection");
      client.close();
    }
  };

  myDB.getAuthorDashboard = async (userId, limit, sortorder) => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    console.log("Connecting to the db");

    try {
      await client.connect();
      console.log("Connected!");

      const db = client.db(DB_NAME);
      const quotesCol = db.collection(COL_QUOTES);
      console.log("Collection ready, querying with ", limit, sortorder);

      const sort_query = sort_dict[sortorder];

      let query_arr = [
        {
          $match: { "user._id": ObjectId(userId) },
        },
        {
          $group: {
            _id: "$author._id",
            date: {
              $max: "$date",
            },
            count: {
              $sum: 1,
            },
            name: {
              $first: "$author.name",
            },
            quote_id: {
              $max: "$_id",
            },
          },
        },
        {
          $sort: sort_query,
        },
      ];

      if (limit) {
        query_arr.push({ $limit: limit });
      }

      const recentAuthors = await quotesCol.aggregate(query_arr).toArray();

      // recentAuthors.forEach(addAuthorBook);

      return recentAuthors;
    } finally {
      console.log("Closing the connection");
      client.close();
    }
  };

  myDB.getBooksDashboard = async (userId, limit, sortorder, getBookDetails) => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    console.log("Connecting to the db");

    try {
      await client.connect();
      console.log("Connected!");

      const db = client.db(DB_NAME);
      const quotesCol = db.collection(COL_QUOTES);
      console.log(
        "Collection ready, querying getBooksDashboard with",
        limit,
        sortorder,
        getBookDetails
      );

      const sort_query = sort_dict[sortorder];

      let query_arr = [
        {
          $match: { "user._id": ObjectId(userId) },
        },
        {
          $group: {
            _id: "$book._id",
            date: {
              $max: "$date",
            },
            count: {
              $sum: 1,
            },
            title: {
              $first: "$book.title",
            },
            author: {
              $first: "$author",
            },
            quote_id: {
              $max: "$_id",
            },
          },
        },
        {
          $sort: sort_query,
        },
      ];

      if (getBookDetails) {
        query_arr.push({
          $lookup: {
            from: "Books",
            localField: "_id",
            foreignField: "_id",
            as: "book_details",
          },
        });
        query_arr.push({
          $unwind: {
            path: "$book_details",
            preserveNullAndEmptyArrays: true,
          },
        });
      }

      if (limit) {
        query_arr.push({ $limit: limit });
      }

      const recentBooks = await quotesCol.aggregate(query_arr).toArray();

      // console.log("getRecentBooks", recentBooks);
      return recentBooks;
    } finally {
      console.log("Closing the connection");
      client.close();
    }
  };

  myDB.createQuote = async quote => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    console.log("Connecting to the db");

    try {
      await client.connect();
      console.log("Connected!");

      const db = client.db(DB_NAME);
      const quotesCol = db.collection(COL_QUOTES);
      console.log("Collection ready, insert ", quote);

      const res = await quotesCol.insertOne(quote);
      console.log("Inserted", res);

      return res;
    } finally {
      console.log("Closing the connection");
      client.close();
    }
  };

  myDB.deleteQuoteById = async quoteId => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    console.log("Connecting to the db");

    try {
      await client.connect();
      console.log("Connected!");

      const quotesCol = client.db(DB_NAME).collection(COL_QUOTES);
      console.log("Collection ready, delete ", quoteId);

      const res = await quotesCol.deleteOne({ _id: ObjectId(quoteId) });
      console.log("deleted", res);

      return res;
    } finally {
      console.log("Closing the connection");
      client.close();
    }
  };

  myDB.getQuoteById = async quoteId => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    console.log("Connecting to the db");

    try {
      await client.connect();
      console.log("Connected!");

      const db = client.db(DB_NAME);
      const quotesCol = db.collection(COL_QUOTES);

      console.log("Collection ready, querying with ", quoteId);

      const quote = await quotesCol.findOne({ _id: ObjectId(quoteId) });

      console.log("Found quote", quote);

      return quote;
    } finally {
      console.log("Closing the connection");
      client.close();
    }
  };

  myDB.updateQuote = async quote => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    console.log("Connecting to the db");

    try {
      await client.connect();
      console.log("Connected!");

      const db = client.db(DB_NAME);
      const quotesCol = db.collection(COL_QUOTES);

      console.log("Collection ready, querying with ", quote);

      if (quote._id) {
        quote._id = ObjectId(quote._id);
      } else {
        quote._id = ObjectId();
      }

      const filter = { _id: quote._id };
      const options = { upsert: true };

      const updateDoc = {
        $set: {
          author: quote.author,
          book: quote.book,
          user: quote.user,
          title: quote.title,
          text: quote.text,
          date: quote.date,
          labels: quote.labels,
          memos: quote.memos,
          tags: quote.tags,
          privacy_level: quote.privacy_level,
        },
      };

      const result = await quotesCol.updateOne(filter, updateDoc, options);

      console.log("Updated quote", result);

      if (!result.upsertedId) {
        return { _id: quote._id };
      } else {
        return { _id: result.upsertedId };
      }
    } finally {
      console.log("Closing the connection");
      client.close();
    }
  };

  return myDB;
}

function addAuthorBook(q) {
  if (q.author) q.author = q.author[0];
  if (q.book) q.book = q.book[0];
}

module.exports = QuotesDB();
