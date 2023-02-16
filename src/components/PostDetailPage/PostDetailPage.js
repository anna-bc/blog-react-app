import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CommentForm from "../../container/CommentForm/CommentForm";
import Actions from "../../state/Actions/Actions";
import CommentsList from "../CommentsList/CommentsList";

import "./PostDetailPage.scss";

function PostDetailPage({ state, dispatch }) {
  const [isEditing, setIsEditing] = useState(false);

  const { idx } = useParams();
  const post = state.posts[idx];

  function handleEditClick() {
    setIsEditing(true);
  }

  return (
    <div className={"PostDetailPage PostDetailPage--" + state.theme}>
      <div className="PostDetailPage__item title">{post.title}</div>
      <div className="PostDetailPage__item content"> {post.content} </div>
      <div className="PostDetailPage__moderationWrapper">
        <div className="moderation__item author">{post.author}</div>
        {state.isLoggedIn ? (
          <div className="moderation__item buttons">
            <button
              className="buttons__item"
              id="editBtn"
              onClick={handleEditClick}
            >
              Edit
            </button>
            <button
              className="buttons__item"
              id="deletBtn"
              onClick={() =>
                dispatch({
                  type: Actions.removePost,
                  payload: { post: post },
                })
              }
            >
              Delete
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="commentSection">
        <CommentsList theme={state.theme} comments={post.comments} />
        <CommentForm
          addComment={(comment) => {
            dispatch({
              type: Actions.addCommentToPost,
              payload: { post: post, comment: comment },
            });
          }}
        />
      </div>
    </div>
  );
}

export default PostDetailPage;
