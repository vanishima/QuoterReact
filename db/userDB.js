const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config();

function UserDB() {
  const myDB = {};
  const DB_NAME = "quoter2";
  const uri = process.env.MONGO_URI;
  const COL_NAME_USER = "Users";

  myDB.findOne = async (query = {}) => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    console.group("Connecting to the db");

    try {
      await client.connect();
      console.log("Connected");

      const col = client.db(DB_NAME).collection(COL_NAME_USER);
      console.log(COL_NAME_USER, "Collection ready, findOne:", query);

      const user = await col.findOne(query);

      console.groupEnd("Found", user);

      return user;
    } finally {
      console.log("Closing the connection");
      client.close();
    }
  };

  myDB.getUserById = async (query = {}) => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    console.group("Connecting to the db");

    try {
      await client.connect();
      console.log("Connected");

      const col = client.db(DB_NAME).collection(COL_NAME_USER);
      console.log(COL_NAME_USER, "Collection ready, getUserById:", query);

      const user = await col.findOne(query, { _id: 1, name: 1, email: 1 });
      console.groupEnd("Found:", user);

      return user;
    } finally {
      console.groupEnd("Closing the connection");
      client.close();
    }
  };

  myDB.createOne = async user => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    // console.log("Connecting to the db");

    try {
      await client.connect();
      // console.log("Connected");

      const col = client.db(DB_NAME).collection(COL_NAME_USER);
      console.log(COL_NAME_USER, "Collection ready, createOne:", user);

      const res = await col.insertOne(user);
      // console.log("Inserted", res);

      return res;
    } finally {
      // console.log("Closing the connection");
      client.close();
    }
  };

  myDB.createLabel = async (label, userId) => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });

    try {
      await client.connect();

      const col = client.db(DB_NAME).collection(COL_NAME_USER);
      console.log(COL_NAME_USER, "Collection ready, createOne:", label, userId);

      const res = await col.updateOne(
        { _id: ObjectId(userId) },
        { $addToSet: { labels: label } }
      );

      return res;
    } finally {
      client.close();
    }
  };

  return myDB;
}

module.exports = UserDB();
