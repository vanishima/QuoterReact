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
    authorId_query = {},
    bookId_query = {},
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
        authorId_query,
        bookId_query
      );

      let match_query = userid_query;
      if (authorId_query || bookId_query) {
        let queryArr = [userid_query];
        if (authorId_query) queryArr.push(authorId_query);
        if (bookId_query) queryArr.push(bookId_query);
        console.log("queryArr", queryArr);
        match_query = { $and: queryArr };
      }
      console.log("match_query", match_query);

      // const match_query = bookId_query
      //   ? { $and: [userid_query, bookId_query] }
      //   : userid_query;

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

      console.log("query_arr", query_arr);

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
          chapter: quote.chapter,
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

  myDB.getUsedTags = async userId => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });

    try {
      await client.connect();

      const db = client.db(DB_NAME);
      const quotesCol = db.collection(COL_QUOTES);
      console.log("Collection ready, querying with ", userId);

      let query_arr = [
        {
          $match: {
            $and: [
              {
                "user._id": new ObjectId(userId),
              },
              {
                tags: {
                  $ne: [""],
                },
              },
            ],
          },
        },
        {
          $project: {
            tags: 1,
            date: 1,
          },
        },
        {
          $unwind: {
            path: "$tags",
            preserveNullAndEmptyArrays: false,
          },
        },
        {
          $match: {
            tags: {
              $ne: "",
            },
          },
        },
        {
          $sort: {
            date: -1,
          },
        },
        {
          $group: {
            _id: "$tags",
            label: {
              $first: "$tags",
            },
            lastUsedAt: {
              $first: "$date",
            },
            count: { $sum: 1 },
          },
        },
      ];

      const usedTags = await quotesCol.aggregate(query_arr).toArray();

      return usedTags;
    } finally {
      console.log("Closing the connection");
      client.close();
    }
  };

  myDB.getQuotedBooks = async userId => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });

    try {
      await client.connect();

      const db = client.db(DB_NAME);
      const quotesCol = db.collection(COL_QUOTES);

      let query_arr = [
        {
          $match: {
            "user._id": new ObjectId(userId),
          },
        },
        {
          $project: {
            book: 1,
            date: 1,
            author: 1,
          },
        },
        {
          $sort: {
            date: 1,
          },
        },
        {
          $lookup: {
            from: "Books",
            localField: "book._id",
            foreignField: "_id",
            as: "bookDetail",
          },
        },
        {
          $unwind: {
            path: "$bookDetail",
            includeArrayIndex: "string",
            preserveNullAndEmptyArrays: false,
          },
        },
        {
          $group: {
            _id: "$book._id",
            title: {
              $first: "$book.title",
            },
            author: {
              $first: "$author",
            },
            chapters: {
              $first: "$bookDetail.chapters",
            },
            lastUsedAt: {
              $last: "$date",
            },
            count: {
              $sum: 1,
            },
          },
        },
        {
          $sort: {
            date: -1,
          },
        },
      ];

      const usedTags = await quotesCol.aggregate(query_arr).toArray();

      return usedTags;
    } finally {
      console.log("Closing the connection");
      client.close();
    }
  };

  return myDB;
}

module.exports = QuotesDB();
