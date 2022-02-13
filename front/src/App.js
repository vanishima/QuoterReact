import "App.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "contexts/AuthContext";
import RequireAuth from "components/authentication/RequireAuth";

import Layout from "components/common/Layout";

import NewUser from "components/authentication/NewUser";
import CommentPage from "pages/CommentPage";
import Authors from "pages/Authors";
import Books from "pages/Books";
import AuthorDetail from "pages/AuthorDetail";
import BookDetail from "pages/BookDetail";
import QuoteDetail from "pages/QuoteDetail";
import QuotesPage from "pages/QuotesPage";
import Home from "pages/Home";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Public routes */}
            <Route path="/login" element={<NewUser />} />

            {/* Protected routes */}
            <Route element={<RequireAuth />}>
              <Route path="/quotes" element={<QuotesPage />} />
              <Route path="/" element={<Home />} />
              {/* <Route path="/" element={<MyQuotes />} /> */}
              <Route path="/comments" element={<CommentPage />} />
              <Route path="/authors" element={<Authors />} />
              <Route path="/author" element={<AuthorDetail />} />
              <Route path="/book" element={<BookDetail />} />
              <Route path="/quote-detail" element={<QuoteDetail />} />
              <Route path="/books" element={<Books />} />
            </Route>

            {/* Catch all */}
            {/* <Route path="*" element={<Missing/>}/> */}
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
