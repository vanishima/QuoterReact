import {getPinyin} from "./utilsAPI";

const FRONTEND =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_FRONTEND_PREFIX
    : ".";

function authorsAPI() {
  const Authors = {};

  Authors.getAuthors = async () => {
    const resRaw = await fetch(FRONTEND + "/authors", {
      method: "GET",
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
      mode: "cors",
    });
    console.log("resRaw", resRaw);
    const res = await resRaw.json();

    if (!resRaw.ok) {
      console.log("FAILED", res.msg);
      return { ok: false, authors: [], msg: res.msg };
    } else {
      console.log("SUCCESS", res.authors.length);
      res.ok = true;
      return res;
    }
  };

  Authors.getAuthorById = async (author_id) => {
    const resRaw = await fetch(FRONTEND + "/authors/" + author_id, {
      method: "GET",
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
      mode: "cors",
    });
    console.log("resRaw", resRaw);
    const res = await resRaw.json();

    if (!resRaw.ok) {
      console.log("FAILED", res.msg);
      return { ok: false, author: {}, msg: res.msg };
    } else {
      console.log("SUCCESS", res);
      res.ok = true;
      return res;
    }
  };

  Authors.getRecentAuthors = async () => {
    ///quotes/recent-authors
    const resRaw = await fetch(FRONTEND + "/quotes/recent-authors", {
      method: "GET",
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
      mode: "cors",
    });
    console.log("resRaw", resRaw);
    const res = await resRaw.json();

    if (!resRaw.ok) {
      console.log("FAILED", res.msg);
      return { ok: false, authors: [], msg: res.msg };
    } else {
      console.log("SUCCESS", res.authors.length);
      res.ok = true;
      return res;
    }
  };

  Authors.quickCreateAuthor = async (author_name) => {
    const newAuthor = {
      name: author_name,
      value: getPinyin(author_name),
      _id: "",
      url: "",
      category: "",
    };

    const result = await Authors.updateAuthor(newAuthor);
    if (result.ok) {
      newAuthor.label = newAuthor.name;
      newAuthor._id = result._id;
      return newAuthor;
    } else {
      alert(result.msg);
    }
  };

  Authors.updateAuthor = async (author) => {
    const resRaw = await fetch(FRONTEND + "/authors/update", {
      method: "POST",
      headers: {
        "x-auth-token": localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(author),
    });
    console.log("resRaw", resRaw);
    const res = await resRaw.json();

    if (!resRaw.ok) {
      console.log("FAILED", res.msg);
      return { ok: false, msg: res.msg };
    } else {
      console.log("SUCCESS", res);
      res.ok = true;
      return res;
    }
  };

  Authors.deleteAuthor = async (author) => {
    const resRaw = await fetch(FRONTEND + "/authors/delete", {
      method: "POST",
      headers: {
        "x-auth-token": localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(author),
    });
    console.log("resRaw", resRaw);
    const res = await resRaw.json();

    if (!resRaw.ok) {
      console.log("FAILED", res.msg);
      return { ok: false, authors: [], msg: res.msg };
    } else {
      console.log("SUCCESS", res.author);
      res.ok = true;
      return res;
    }
  };

  return Authors;
}

export default authorsAPI();
