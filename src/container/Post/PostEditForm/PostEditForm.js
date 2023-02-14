import React, { useState } from "react";
import Actions from "../../../state/Actions/Actions";

function PostEditForm({post, setIsEditing, dispatch}) {
  const [newPost, setNewPost] = useState({
    title: post.title,
    content: post.content,
    author: post.author,
  });

  function onSubmit(e) {
    e.preventDefault();
    dispatch({
      type: Actions.editPost,
      payload: { post: post, editedPost: newPost },
    });
    setIsEditing(false);
  }

  return (
    <div className="editWrapper">
      <form className="formWrapper" onSubmit={onSubmit}>
        <input
          type="text"
          className="form__item title"
          defaultValue={post.title}
          placeholder="Write a Title"
          onChange={(e) => setNewPost({ ...post, title: e.target.value })}
        />
        <textarea
          className="form__item content"
          defaultValue={post.content}
          placeholder="Write some content in here"
          onChange={(e) =>
            setNewPost({ ...post, content: e.target.value })
          }
        />
        <div className="moderationWrapper">
          <input
            type="text"
            className="moderation__item author"
            defaultValue={post.author}
            placeholder="who wrote this post?"
            onChange={(e) =>
              setNewPost({ ...post, author: e.target.value })
            }
          />
          <div className="moderation__item buttons">
            <input type="submit" className="buttons__item" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default PostEditForm;
