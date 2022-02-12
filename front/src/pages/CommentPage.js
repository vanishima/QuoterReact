import React from "react";

// Element
import Layout from "../components/common/Layout";
import Comments from "../comments/Comments";

import "../styles/comments.css";

const CommentPage = () => {
  return (
    <Layout>
      <h1>Hello comments</h1>
      <Comments currentUserId="1" />
    </Layout>
  );
};

export default CommentPage;
