import { getPinyin } from "./utilsAPI";

const FRONTEND =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_FRONTEND_PREFIX
    : ".";

function booksAPI() {
  const Books = {};

  Books.getBooks = async (author_id) => {
    const resRaw = await fetch(FRONTEND + "/books?authorId=" + author_id, {
      method: "GET",
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
      mode: "cors",
    });
    // console.log("resRaw", resRaw);
    const res = await resRaw.json();

    if (!resRaw.ok) {
      console.log("FAILED", res.msg);
      return { ok: false, books: [], msg: res.msg };
    } else {
      // console.log("SUCCESS", res.books);
      res.ok = true;
      return res;
    }
  };

  Books.getBookById = async (book_id) => {
    const resRaw = await fetch(FRONTEND + "/books/" + book_id, {
      method: "GET",
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
      mode: "cors",
    });
    // console.log("resRaw", resRaw);
    const res = await resRaw.json();

    if (!resRaw.ok) {
      console.log("FAILED", res.msg);
      return { ok: false, book: {}, msg: res.msg };
    } else {
      console.log("SUCCESS", res);
      res.ok = true;
      return res;
    }
  };

  Books.quickCreateBook = async (book_title, author) => {
    const newBook = {
      _id: "",
      author: { _id: author._id, name: author.name },
      title: book_title,
      coverUrl: "",
      url: "",
      keywords: "",
      introduction: "",
    };
    console.log("ready to feed to backend with newBook", newBook);

    const result = await Books.updateBook(newBook);
    if (result.ok) {
      newBook.label = newBook.title;
      newBook.value = getPinyin(book_title);
      newBook._id = result._id;
      console.log("newBook created", newBook);
      return newBook;
    } else {
      alert(result.msg);
    }
  };

  Books.updateBook = async (book) => {
    console.log("ready to call backend with", book);
    const resRaw = await fetch(FRONTEND + "/books/update", {
      method: "POST",
      headers: {
        "x-auth-token": localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(book),
    });
    // console.log("resRaw", resRaw);
    const res = await resRaw.json();

    if (!resRaw.ok) {
      console.log("FAILED", res.msg);
      return { ok: false, msg: res.msg };
    } else {
      res.ok = true;
      return res;
    }
  };

  Books.deleteBook = async (book) => {
    console.log("ready to call backend with", book);
    const resRaw = await fetch(FRONTEND + "/books/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      },
      mode: "cors",
      body: JSON.stringify(book),
    });
    // console.log("resRaw", resRaw);
    const res = await resRaw.json();

    if (!resRaw.ok) {
      console.log("FAILED", res.msg);
      return { ok: false, book: {}, msg: res.msg };
    } else {
      console.log("SUCCESS", res);
      res.ok = true;
      return res;
    }
  };

  return Books;
}

export default booksAPI();
