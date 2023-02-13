import React from "react";
import './CommentsList.scss';
import Comment from "../Comment/Comment";

function CommentsList(props) {
  return (
    <div className={"CommentsList" + " CommentsList--" + props.theme}>
      <ul id="commentList">
        {props.comments.map((comment, i) => (
          <li key={i}>
            <Comment theme={props.theme} author={comment.author} content={comment.content} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentsList;
