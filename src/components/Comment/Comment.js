import React from "react";
import "./Comment.scss";

function Comment(props) {
  return (
    <div className={"Comment" + " Comment--" + props.theme}>
      <div className="Comment__item titleContainer">
        <div className="titleContainer__item">Written By</div>
        <div className="titleContainer__item titleContainer__item--title">{props.author}</div>
      </div>
      <div className="Comment__item">{props.content}</div>
    </div>
  );
}

export default Comment;
