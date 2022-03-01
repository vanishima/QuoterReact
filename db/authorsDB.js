const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config();

function AuthorsDB() {
  const myDB = {};
  const DB_NAME = "quoter2";
  const uri = process.env.MONGO_URI;
  const COL_AUTHORS = "Authors";

  myDB.getAll = async (query = {}, pageSize = 10, page = 1) => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    console.log("Connecting to the db");

    try {
      await client.connect();
      console.log("Connected!");

      const db = client.db(DB_NAME);
      const authorsCol = db.collection(COL_AUTHORS);
      console.log("Collection ready, querying with ", query, pageSize, page);

      const authors = await authorsCol
        .aggregate([
          {
            $lookup: {
              from: "Books",
              localField: "_id",
              foreignField: "author._id",
              as: "books",
            },
          },
          { $match: query },
          { $skip: pageSize * (page - 1) },
          { $sort: { _id: -1 } },
          // { $limit: pageSize },
        ])
        .toArray();

      console.log("Found authors", authors.length);

      return authors;
    } finally {
      console.log("Closing the connection");
      client.close();
    }
  };

  myDB.getAuthorById = async author_id => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    console.group("Connecting to the db");

    try {
      await client.connect();
      console.log("Connected");

      const col = client.db(DB_NAME).collection(COL_AUTHORS);
      console.log(COL_AUTHORS, "Collection ready, getAuthorById:", author_id);

      const author = await col
        .aggregate([
          { $match: { _id: ObjectId(author_id) } },
          {
            $lookup: {
              from: "Books",
              localField: "_id",
              foreignField: "author._id",
              as: "books",
            },
          },
          {
            $lookup: {
              from: "Quotes",
              localField: "_id",
              foreignField: "author._id",
              as: "quotes",
            },
          },
        ])
        .toArray();

      console.groupEnd("Found:", author);

      return author[0];
    } finally {
      console.groupEnd("Closing the connection");
      client.close();
    }
  };

  myDB.createAuthor = async (author, userId) => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });

    try {
      await client.connect();

      const col = client.db(DB_NAME).collection(COL_AUTHORS);

      author._id = ObjectId();
      if (author.category) author.category = getTagsArray(author.category);

      console.log(col, "Collection ready, update/create author:", author);

      const filter = { _id: author._id };
      const options = { upsert: true };

      const updateDoc = {
        $set: {
          name: author.name,
          userId: ObjectId(userId),
        },
      };

      const result = await col.updateOne(filter, updateDoc, options);

      // console.groupEnd("created:", result);

      return { _id: result.upsertedId, name: author.name };
    } finally {
      console.groupEnd("Closing the connection");
      client.close();
    }
  };

  myDB.updateAuthor = async (author, userId) => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    console.group("Connecting to the db");

    try {
      await client.connect();
      console.log("Connected");

      const col = client.db(DB_NAME).collection(COL_AUTHORS);

      // console.log("before author id", author._id);
      if (author._id) {
        author._id = ObjectId(author._id);
      } else {
        author._id = ObjectId();
      }
      // console.log("after author._id", author._id);
      if (author.category) author.category = getTagsArray(author.category);

      console.log(col, "Collection ready, update/create author:", author);

      const filter = { _id: author._id };
      const options = { upsert: true };

      const updateDoc = {
        $set: {
          name: author.name,
          category: author.category,
          url: author.url,
          userId: ObjectId(userId),
        },
      };

      const result = await col.updateOne(filter, updateDoc, options);
      // const result = await col.findOneAndUpdate(filter, updateDoc, options);

      console.groupEnd("Updated:", result);

      if (!result.upsertedId) {
        return { _id: author._id, name: author.name };
      } else {
        return { _id: result.upsertedId, name: author.name };
      }
    } finally {
      console.groupEnd("Closing the connection");
      client.close();
    }
  };

  myDB.deleteAuthor = async author => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    console.group("Connecting to the db");

    try {
      await client.connect();
      console.log("Connected");

      const col = client.db(DB_NAME).collection(COL_AUTHORS);
      const books_col = client.db(DB_NAME).collection("Books");

      author._id = ObjectId(author._id);

      console.log(col, "Collection ready, delete author:", author);

      const result = await col.deleteOne({ _id: author._id });
      const book_result = await books_col.deleteMany({
        "author._id": author._id,
      });
      console.log("deleted books by author", book_result);

      console.groupEnd("Updated:", result);

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

module.exports = AuthorsDB();
