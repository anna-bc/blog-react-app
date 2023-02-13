import React, { useState } from "react";
import './CommentForm.scss';

function CommentForm(props) {
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');

  function handleCommentSubmit(e) {
    e.preventDefault();
    props.addComment({
        author,
        content,
    });

    setAuthor('');
    setContent('');
  }

  return (
    <div className={"CommentsForm" + " CommentsForm--" + props.theme}>
      <form onSubmit={handleCommentSubmit} id="commentForm">
        <input type="text" value={author} placeholder="Your name" className="commentForm__input" onInput={(e) => setAuthor(e.target.value)}></input>
        <textarea type="text" value={content} placeholder="content" className="commentForm__input" onInput={(e) => setContent(e.target.value)}></textarea>
        <input type="submit" id="commentSubmit"></input>
      </form>
    </div>
  );
}

export default CommentForm;
