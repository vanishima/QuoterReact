import { useState, useEffect } from "react";
// import PropTypes from "prop-types";

import Comment from "./Comment";
import CommentForm from "./CommentForm";
import {
  getComments as getCommentsApi,
  createComment as createCommentApi,
  deleteComment as deleteCommentApi,
  updateComment as updateCommentApi,
} from "../api/api";

const Comments = (props) => {
  const { currentUserId } = props;
  const [comments, setComments] = useState([]);
  const [activeComment, setActiveComment] = useState(null);
  // {type: "editing", id: "1"};
  const rootComments = comments.filter(
    (comments) => comments.parentId === null
  );
  const getReplies = (commentId) => {
    return comments
      .filter((comments) => comments.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
  };

  const addComment = (text, parentId) => {
    console.log("addComment", text, parentId);
    createCommentApi(text, parentId).then((comment) => {
      setComments([comment, ...comments]);
      setActiveComment(null);
    });
  };

  const deleteComment = (commentId) => {
    if (window.confirm("Are you sure that you want to remove comment")) {
      deleteCommentApi(commentId).then(() => {
        const updatedComments = comments.filter(
          (comment) => comment.id !== commentId
        );
        setComments(updatedComments);
      });
    }
  };

  const updateComment = (text, commentId) => {
    updateCommentApi(text, commentId).then(() => {
      const updatedComments = comments.map((comment) => {
        if (comment.id === commentId) {
          return { ...comment, body: text };
        }
        return comment;
      });
      setComments(updatedComments);
      setActiveComment(null);
    });
  };

  useEffect(() => {
    getCommentsApi().then((data) => {
      setComments(data);
    });
  }, []);

  return (
    <div className="comments">
      <h3 className="comments-title">Comments</h3>
      <div className="comment-form-title">Write comment</div>
      <CommentForm submitLabel="Write" handleSubmit={addComment} />
      <div className="comments-container">
        {rootComments.map((rootComment) => (
          <Comment
            key={rootComment.id}
            comment={rootComment}
            replies={getReplies(rootComment.id)}
            currentUserId={currentUserId}
            deleteComment={deleteComment}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
            addComment={addComment}
            updateComment={updateComment}
          />
        ))}
      </div>
    </div>
  );
};

Comments.propTypes = {};

export default Comments;
