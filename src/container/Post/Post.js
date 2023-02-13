import "./Post.scss";

import { useContext, useState } from "react";
import CommentsList from "../../components/CommentsList/CommentsList";
import CommentForm from "../CommentForm/CommentForm";
import { StateContext } from "../../state/context/context";
import Actions from "../../state/Actions/Actions";

export default function Post(props) {
  const {state, dispatch} = useContext(StateContext);
  const [newPost, setNewPost] = useState({
    title: props.post.title,
    content: props.post.content,
    author: props.post.author,
  });

  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing(true);
  }

  // function handleDeleteClick() {
  //   props.deleteClick(props.post);
  // }

  function onSubmit(e) {
    e.preventDefault();
    dispatch({type: Actions.editPost, payload: {post: props.post}})
    setIsEditing(false);
  }

  return (
    <>
      {isEditing ? (
        <div className="editWrapper">
          <div className="newPost">
            {isEditing ? "Add a new Post" : "Edit the Post"}
          </div>
          <form className="formWrapper" onSubmit={onSubmit}>
            <input
              type="text"
              className="form__item title"
              defaultValue={props.post.title}
              placeholder="Write a Title"
              onChange={(e) =>
                setNewPost({ ...props.post, title: e.target.value })
              }
            />
            <textarea
              className="form__item content"
              defaultValue={props.post.content}
              placeholder="Write some content in here"
              onChange={(e) =>
                setNewPost({ ...props.post, content: e.target.value })
              }
            />
            <div className="moderationWrapper">
              <input
                type="text"
                className="moderation__item author"
                defaultValue={props.post.author}
                placeholder="who wrote this post?"
                onChange={(e) =>
                  setNewPost({ ...props.post, author: e.target.value })
                }
              />
              <div className="moderation__item buttons">
                <input type="submit" className="buttons__item" />
              </div>
            </div>
          </form>
        </div>
      ) : (
          <div
            className={
              "Post" +
              " Post" +
              (state.theme === "light" ? "--light" : "--dark")
            }
          >
            <div className="post__item title">{props.post.title}</div>
            <div className="post__item content"> {props.post.content} </div>
            <div className="moderationWrapper">
              <div className="moderation__item author">{props.post.author}</div>
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
                    onClick={() => dispatch({type: Actions.removePost, payload: {post: props.post}})}
                  >
                    Delete
                  </button>
                </div>
              ) : (
                <></>
              )}
            </div>
            {/* <div className="commentSection">
              <CommentsList
                theme={state.theme}
                comments={props.post.comments}
              />
              <CommentForm 
              addComment={(comment) => {
                let newPost = {...props.post, comments: [...props.post.comments, comment]}
                let idx = props.posts.indexOf(props.post);
                const newPosts = [...props.posts].map((p, i) => {
                  if (idx == i) {
                    return newPost;
                  }
                  return p;
                });
            
                props.setPostList(newPosts);
              }
            } />
            </div> */}
          </div>
      )}
    </>
  );
}
