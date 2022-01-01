const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config();

const DB_NAME = "quoter2";
const uri =
  "mongodb+srv://projectUser:testtest@quoter.1muqt.mongodb.net/myworldmap?retryWrites=true&w=majority";

async function getQuotes() {
  const client = new MongoClient(uri, { useUnifiedTopology: true });
  console.log("Connecting to the db");

  try {
    await client.connect();
    console.log("Connected!");

    const db = client.db(DB_NAME);
    const col = db.collection("Quotes");

    const quotes = await col.find().toArray();

    console.log(quotes);

    for (let quote of quotes) {
      let quoteFullTemp = await col
        .aggregate([
          { $match: { _id: ObjectId(quote._id) } },
          {
            $lookup: {
              from: "Authors",
              localField: "authorID",
              foreignField: "_id",
              as: "author",
            },
          },
          {
            $lookup: {
              from: "Books",
              localField: "bookID",
              foreignField: "_id",
              as: "book",
            },
          },
          {
            $lookup: {
              from: "Users",
              localField: "userID",
              foreignField: "_id",
              as: "user",
            },
          },
          {
            $unwind: {
              path: "$author",
              preserveNullAndEmptyArrays: true,
            },
          },
          {
            $unwind: {
              path: "$book",
              preserveNullAndEmptyArrays: true,
            },
          },
          {
            $unwind: {
              path: "$user",
              preserveNullAndEmptyArrays: true,
            },
          },
        ])
        .toArray();
      let quoteFull = quoteFullTemp[0];
      quoteFull.author = {
        _id: ObjectId(quoteFull.author._id),
        name: quoteFull.author.name,
      };
      quoteFull.book = {
        _id: ObjectId(quoteFull.book._id),
        title: quoteFull.book.title,
      };
      quoteFull.user = {
        _id: ObjectId(quoteFull.user._id),
        name: quoteFull.user.name,
      };
      console.log(quoteFull);

      const filter = { _id: ObjectId(quoteFull._id) };
      const options = { upsert: true };

      const updateDoc = {
        $set: {
          // author: quoteFull.author,
          // book: quoteFull.book,
          user: quoteFull.user,
        },
      };

      const res = await col.updateOne(filter, updateDoc, options);
      console.log("updated", res);
    }
  } finally {
    console.log("Closing the connection");
    client.close();
  }
}

async function changeDateFormat() {
  const client = new MongoClient(uri, { useUnifiedTopology: true });
  console.log("Connecting to the db");

  try {
    await client.connect();
    console.log("Connected!");

    const db = client.db(DB_NAME);
    const col = db.collection("Quotes");

    const quotes = await col.find().toArray();

    console.log(quotes);

    for (let quote of quotes) {
      quote.date = new Date(quote.date);
      console.log(quote);

      const filter = { _id: ObjectId(quote._id) };
      const options = { upsert: true };

      const updateDoc = {
        $set: {
          date: quote.date,
        },
      };

      const res = await col.updateOne(filter, updateDoc, options);
      console.log("updated", res);
    }
  } finally {
    console.log("Closing the connection");
    client.close();
  }
}

// changeDateFormat();

// change memo format
async function changeMemoFormat() {
  const client = new MongoClient(uri, { useUnifiedTopology: true });
  console.log("Connecting to the db");

  try {
    await client.connect();
    console.log("Connected!");

    const db = client.db(DB_NAME);
    const col = db.collection("Quotes");

    const quotes = await col.find().toArray();

    // console.log(quotes);

    for (let quote of quotes) {
      if (typeof quote.memo === "string") {
        if (quote.memo) {
          // create memo array
          const memo_arr = [
            {
              _id: ObjectId(),
              user: {
                _id: quote.user._id || quote.userID,
                name: quote.user.name,
              },
              text: quote.memo,
              date: quote.date,
            },
          ];
          quote.memo = memo_arr;
        } else {
          quote.memo = [];
        }
      } else if (Array.isArray(quote.memo) && quote.memo.length > 0) {
        const memo_arr = [
          {
            _id: ObjectId(),
            user: {
              _id: quote.user._id || quote.userID,
              name: quote.user.name,
            },
            text: quote.memo[0].text,
            date: quote.memo.date || quote.date,
          },
        ];
        quote.memo = memo_arr;
      }
      console.log("updating to", quote);

      const filter = { _id: ObjectId(quote._id) };
      const options = { upsert: true };

      const updateDoc = {
        $set: {
          memo: quote.memo,
        },
      };

      const res = await col.updateOne(filter, updateDoc, options);
      console.log("updated", res);
    }
  } finally {
    console.log("Closing the connection");
    client.close();
  }
}

changeMemoFormat();

// add author to books
async function addAuthorToBooks() {
  const client = new MongoClient(uri, { useUnifiedTopology: true });
  console.log("Connecting to the db");

  try {
    await client.connect();
    console.log("Connected!");

    const db = client.db(DB_NAME);
    const col = db.collection("Books");

    const books = await col.find().toArray();

    for (let book of books) {
      let bookFullTemp = await col
        .aggregate([
          { $match: { _id: ObjectId(book._id) } },
          {
            $lookup: {
              from: "Authors",
              localField: "authorID",
              foreignField: "_id",
              as: "author",
            },
          },
          {
            $unwind: {
              path: "$author",
              preserveNullAndEmptyArrays: true,
            },
          },
        ])
        .toArray();
      let bookFull = bookFullTemp[0];

      bookFull.author = {
        _id: ObjectId(bookFull.author._id),
        name: bookFull.author.name,
      };
      // console.log(bookFull);

      const filter = { _id: ObjectId(bookFull._id) };
      const options = { upsert: true };

      const updateDoc = {
        $set: {
          author: bookFull.author,
        },
      };

      const res = await col.updateOne(filter, updateDoc, options);
      console.log("updated", res);
    }
  } finally {
    console.log("Closing the connection");
    client.close();
  }
}

// addAuthorToBooks();

async function changeCategoryFormat() {
  const client = new MongoClient(uri, { useUnifiedTopology: true });
  console.log("Connecting to the db");

  try {
    await client.connect();
    console.log("Connected!");

    const db = client.db(DB_NAME);
    const col = db.collection("Authors");

    const authors = await col.find().toArray();

    for (let author of authors) {
      author.category = getTagsArray(author.category);
      console.log(author);

      const filter = { _id: ObjectId(author._id) };
      const options = { upsert: true };

      const updateDoc = {
        $set: {
          category: author.category,
        },
      };

      const res = await col.updateOne(filter, updateDoc, options);
      console.log("updated", res);
    }
  } finally {
    console.log("Closing the connection");
    client.close();
  }
}

// changeCategoryFormat();

function getTagsArray(tags) {
  let arr = tags.split(" ");
  return arr.filter((i) => i !== "");
}
