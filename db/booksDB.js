const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config();

function BooksDB() {
  const myDB = {};
  const DB_NAME = "quoter2";
  const uri = process.env.MONGO_URI;
  const COL_BOOKS = "Books";

  myDB.getAll = async (authorId, pageSize, page) => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    console.log("Connecting to the db");

    try {
      await client.connect();
      console.log("Connected!");

      const db = client.db(DB_NAME);
      const booksCol = db.collection(COL_BOOKS);
      console.log("Collection ready, querying with ", authorId, pageSize, page);

      let query = {};
      if (authorId !== "undefined") {
        query = { "author._id": ObjectId(authorId) };
      }

      const books = await booksCol.find(query).sort({ _id: -1 }).toArray();

      console.log("Found books", books.length);

      return books;
    } finally {
      console.log("Closing the connection");
      client.close();
    }
  };

  myDB.getBookById = async book_id => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    console.group("Connecting to the db");

    try {
      await client.connect();
      console.log("Connected");

      const col = client.db(DB_NAME).collection(COL_BOOKS);
      console.log(COL_BOOKS, "Collection ready, getBookById:", book_id);

      const book = await col
        .aggregate([
          { $match: { _id: ObjectId(book_id) } },
          {
            $lookup: {
              from: "Quotes",
              localField: "_id",
              foreignField: "book._id",
              as: "quotes",
            },
          },
        ])
        .toArray();

      console.groupEnd("Found:", book);

      return book[0];
    } finally {
      console.groupEnd("Closing the connection");
      client.close();
    }
  };

  myDB.updateBook = async (book, userId) => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    console.group("Connecting to the db");

    try {
      await client.connect();
      console.log("Connected");

      const col = client.db(DB_NAME).collection(COL_BOOKS);

      if (book._id) {
        book._id = ObjectId(book._id);
      } else {
        book._id = ObjectId();
      }

      const author = {
        _id: ObjectId(book.author._id),
        name: book.author.name,
      };

      book.userId = ObjectId(userId);
      if (book.keywords) book.keywords = getTagsArray(book.keywords);

      console.log(COL_BOOKS, "Collection ready, update book:", book);

      const filter = { _id: book._id };
      const options = { upsert: true };

      const updateDoc = {
        $set: {
          title: book.title,
          author: author,
          userId: book.userId,
          introduction: book.introduction,
          url: book.url,
          keywords: book.keywords,
          coverUrl: book.coverUrl,
        },
      };

      const result = await col.updateOne(filter, updateDoc, options);
      console.groupEnd("Updated:", result);

      if (!result.upsertedId) {
        return { _id: book._id, title: book.title };
      } else {
        return { _id: result.upsertedId, title: book.title };
      }
    } finally {
      console.groupEnd("Closing the connection");
      client.close();
    }
  };

  myDB.getBookById = async book_id => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    console.group("Connecting to the db");

    try {
      await client.connect();
      console.log("Connected");

      const col = client.db(DB_NAME).collection(COL_BOOKS);
      console.log(COL_BOOKS, "Collection ready, getBookById:", book_id);

      const book = await col
        .aggregate([
          { $match: { _id: ObjectId(book_id) } },
          {
            $lookup: {
              from: "Quotes",
              localField: "_id",
              foreignField: "book._id",
              as: "quotes",
            },
          },
        ])
        .toArray();

      console.groupEnd("Found:", book);

      return book[0];
    } finally {
      console.groupEnd("Closing the connection");
      client.close();
    }
  };

  myDB.deleteBookById = async bookId => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    console.group("Connecting to the db");

    try {
      await client.connect();
      console.log("Connected");

      const col = client.db(DB_NAME).collection(COL_BOOKS);

      console.log(COL_BOOKS, "Collection ready, delete book:", bookId);

      const result = await col.deleteOne({ _id: ObjectId(bookId) });

      console.groupEnd("Deleted:", result);

      return result;
    } finally {
      console.groupEnd("Closing the connection");
      client.close();
    }
  };

  return myDB;
}

function getTagsArray(tags) {
  let arr = tags.split(" ");
  return arr.filter(i => i !== "");
}

module.exports = BooksDB();
