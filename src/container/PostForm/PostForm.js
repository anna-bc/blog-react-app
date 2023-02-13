import "./PostForm.scss";

import { useState } from "react";

export default function PostForm(props) {
  const [post, setPost] = useState({
    title: "",
    content: "",
    author: "",
    comments: [],
  });

  function onSubmit(e) {
    e.preventDefault();
    setPost(post);
    if (!props.isEditing) {
      props.addPost(post);
    }
  }

  return (
    <div
      className={
        "PostForm" +
        " PostForm" +
        (props.theme === "light" ? "--light" : "--dark")
      }
    >
      <div className="newPost">Add a new Post</div>
      <form className="formWrapper" onSubmit={onSubmit}>
        <input
          type="text"
          className="form__item title"
          placeholder="Write a Title"
          required
          onInput={(e) => setPost({ ...post, title: e.target.value })}
        />
        <textarea
          className="form__item content"
          placeholder="Write some content in here"
          required
          onInput={(e) => setPost({ ...post, content: e.target.value })}
        />
        <div className="moderationWrapper">
          <input
            type="text"
            className="moderation__item author"
            placeholder="who wrote this post?"
            required
            onInput={(e) => setPost({ ...post, author: e.target.value })}
          />
          <div className="moderation__item buttons">
            <input type="submit" className="buttons__item" />
          </div>
        </div>
      </form>
    </div>
  );
}
