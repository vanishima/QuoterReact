import "App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "contexts/AuthContext";

import NewUser from "components/authentication/NewUser";
import MyQuotes from "pages/MyQuotes";
import CommentPage from "pages/CommentPage";
import Authors from "pages/Authors";
import Books from "pages/Books";
import AuthorDetail from "pages/AuthorDetail";
import BookDetail from "pages/BookDetail";
import QuoteDetail from "pages/QuoteDetail";
import QuotesPage from "pages/QuotesPage";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Authentication */}
          <Route path="/login" element={<NewUser />} />

          {/* Quotes */}
          <Route path="/quotes" element={<QuotesPage />} />
          <Route path="/comments" element={<CommentPage />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/" element={<MyQuotes />} />
          <Route path="/author" element={<AuthorDetail />} />
          <Route path="/book" element={<BookDetail />} />
          <Route path="/quote-detail" element={<QuoteDetail />} />
          <Route path="/books" element={<Books />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
