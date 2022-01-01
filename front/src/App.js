import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { Routes, Route } from "react-router-dom";
import NewUser from "./pages/account/NewUser";
import MyQuotes from "./pages/MyQuotes";
import CommentPage from "./pages/CommentPage";
import Authors from "./pages/Authors";
import Books from "./pages/Books";
import AuthorDetail from "./pages/AuthorDetail";
import BookDetail from "./pages/BookDetail";
import QuoteDetail from "./pages/QuoteDetail";

function App() {

  return (
    <div>
      <div className="App"></div>
      <Routes>
        <Route path="/my-quotes" element={<MyQuotes />} />
        <Route path="/comments" element={<CommentPage />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/" element={<NewUser />} />
        <Route path="/author" element={<AuthorDetail />} />
        <Route path="/book" element={<BookDetail />} />
        <Route path="/quote-detail" element={<QuoteDetail />} />
        <Route path="/books" element={<Books />} />
      </Routes>
    </div>
  );
}

export default App;
