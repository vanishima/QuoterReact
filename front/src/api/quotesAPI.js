const FRONTEND =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_FRONTEND_PREFIX
    : ".";

function quotesAPI() {
  const Quotes = {};

  Quotes.getAll = async (pageSize, page, sortorder, bookid) => {
    console.log("ready to fetch quotes", pageSize, page, sortorder);
    const resRaw = await fetch(
      FRONTEND +
        "/quotes?pagesize=" +
        pageSize +
        "&page=" +
        page +
        "&bookid=" +
        bookid +
        "&sortorder=" +
        sortorder,
      {
        method: "GET",
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
        mode: "cors",
      }
    );
    // console.log("resRaw", resRaw);
    const res = await resRaw.json();

    if (!resRaw.ok) {
      console.log("FAILED", res.msg);
      return { ok: false, quotes: [], msg: res.msg };
    } else {
      res.ok = true;
      return res;
    }
  };

  Quotes.getQuoteById = async (quoteId) => {
    console.log("quotesAPI.getQuoteById", quoteId);
    const resRaw = await fetch(FRONTEND + "/quotes/" + quoteId, {
      method: "GET",
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
      mode: "cors",
    });
    // console.log("resRaw", resRaw);
    const res = await resRaw.json();

    if (!resRaw.ok) {
      alert(res.msg);
    } else {
      return res.quote;
    }
  };

  Quotes.updateQuote = async (quote) => {
    // console.log("quotesAPI.updateQuote", quote);
    const resRaw = await fetch(FRONTEND + "/quotes/update", {
      method: "post",
      headers: {
        "x-auth-token": localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(quote),
    });
    // console.log("resRaw", resRaw);
    const res = await resRaw.json();

    if (!resRaw.ok) {
      // return { ok: false, msg: res.msg };
      alert(res.msg);
    } else {
      res.ok = true;
      console.log("updateQuote result",res);
      return res;
    }
  };

  Quotes.getBooksDashboard = async (sortOrder, limit, getDetails = false) => {
    const resRaw = await fetch(
      FRONTEND +
        "/quotes/books?sortorder=" +
        sortOrder +
        "&limit=" +
        limit +
        "&getdetails=" +
        getDetails,
      {
        method: "GET",
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
        mode: "cors",
      }
    );
    // console.log("resRaw", resRaw);
    const res = await resRaw.json();

    if (!resRaw.ok) {
      console.log("FAILED", res.msg);
      return { ok: false, books: [], msg: res.msg };
    } else {
      res.ok = true;
      // console.log("Got res", res);
      return res;
    }
  };

  Quotes.getAuthorsDashboard = async (sortOrder, limit) => {
    console.log("ready to fetch authors", sortOrder, limit);
    const resRaw = await fetch(
      FRONTEND + "/quotes/authors?sortorder=" + sortOrder + "&limit=" + limit,
      {
        method: "GET",
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
        mode: "cors",
      }
    );
    // console.log("resRaw", resRaw);
    const res = await resRaw.json();

    if (!resRaw.ok) {
      console.log("FAILED", res.msg);
      return { ok: false, authors: [], msg: res.msg };
    } else {
      // console.log("SUCCESS", res.authors);
      res.ok = true;
      return res;
    }
  };

  Quotes.createQuote = async (post) => {
    const resRaw = await fetch(FRONTEND + "/quotes/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      },
      mode: "cors",
      body: JSON.stringify(post),
    });
    const res = await resRaw.json();

    if (!resRaw.ok) {
      return { ok: false, msg: res.msg };
    } else {
      return { ok: true };
    }
  };

  Quotes.deleteQuoteById = async (quoteId) => {
    return fetch(FRONTEND + "/quotes/delete/" + quoteId, {
      method: "POST",
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
      mode: "cors",
    });
  };

  return Quotes;
}

export default quotesAPI();
