import "./Post.scss";

import { useContext, useState } from "react";
import CommentsList from "../../components/CommentsList/CommentsList";
import CommentForm from "../CommentForm/CommentForm";
import { StateContext } from "../../state/context/context";
import Actions from "../../state/Actions/Actions";
import PostEditForm from "./PostEditForm/PostEditForm";
import { useNavigate } from "react-router-dom";

export default function Post(props) {
  const {state, dispatch} = useContext(StateContext);
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  function handleEditClick() {
    setIsEditing(true);
  }

  return (
    <>
      {isEditing ? (
        <PostEditForm post={props.post} setIsEditing={setIsEditing} dispatch={dispatch} />) : (
          <div
            className={
              "Post Post--" +
              state.theme
            }
          >
            <div className="post__item title">{props.post.title}</div>
            <div className="post__item content"> {props.post.content} </div>
            <div className="moderationWrapper">
              <div className="moderation__item author">{props.post.author}</div>
              <div><button onClick={() => navigate(`/post/${state.posts.indexOf(props.post)}`) }>Details</button></div>
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
            <div className="commentSection">
              <CommentsList
                theme={state.theme}
                comments={props.post.comments}
              />
              <CommentForm 
              addComment={(comment) => {
                dispatch({type: Actions.addCommentToPost, payload: {post: props.post, comment: comment}});
              }
            } />
            </div>
          </div>
      )}
    </>
  );
}
