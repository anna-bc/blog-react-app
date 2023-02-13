import "./PostList.scss";
import Post from "../Post/Post";
import { useContext, useEffect } from "react";
import { StateContext } from "../../state/context/context";
import Actions from "../../state/Actions/Actions";

export default function PostList() {
  const {state, dispatch} = useContext(StateContext);
  // let postsList = [];


  // useEffect(() => {
  //   localStorage.setItem("posts", JSON.stringify(state.posts));
  // }, [state.posts]);

  // useEffect(() => {
  //   if (state.isSearching == true) {
  //     console.log("search list");
  //     postsList = state.searchList;
  //   } else {
  //     console.log("posts list");
  //     postsList = state.posts;
  //   }
  // }, [state.isSearching])

  return (
    <div
      className={
        "PostList" +
        " PostList" +
        (state.theme === "light" ? "--light" : "--dark")
      }
    >
      <ul>
        {state.posts.map((post, i) => (
          <li key={i}>
            <Post
              post={post}
              posts={state.posts}
              // setPostList={props.setPostList}
              // deleteClick={(post) => props.removePost(post)}
              // isLoggedIn={props.isLoggedIn}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
