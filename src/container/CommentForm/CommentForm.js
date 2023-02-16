import React, { useContext, useState } from "react";
import { StateContext } from "../../state/context/context";
import "./CommentForm.scss";

function CommentForm(props) {
  const { state, dispatch } = useContext(StateContext);

  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  function handleCommentSubmit(e) {
    e.preventDefault();
    props.addComment({
      author,
      content,
    });

    setAuthor("");
    setContent("");
  }

  return (
    <div className={"CommentsForm CommentsForm--" + state.theme}>
      <form onSubmit={handleCommentSubmit} id="commentForm">
        <input
          type="text"
          value={author}
          placeholder="Your name"
          className="commentForm__input"
          onInput={(e) => setAuthor(e.target.value)}
        ></input>
        <textarea
          type="text"
          value={content}
          placeholder="content"
          className="commentForm__input"
          onInput={(e) => setContent(e.target.value)}
        ></textarea>
        <input type="submit" id="commentSubmit"></input>
      </form>
    </div>
  );
}

export default CommentForm;
