import "./PostList.scss";
import Post from "../Post/Post";
import { useContext, useEffect, useState } from "react";
import { StateContext } from "../../state/context/context";
import Actions from "../../state/Actions/Actions";

export default function PostList() {
  const {state, dispatch} = useContext(StateContext);
  const [postsList, setPostsList] = useState(state.posts);

  useEffect(() => {
    setPostsList(state.posts);
  })

  useEffect(() => {
    if (state.isSearching == true) {
      setPostsList(state.searchList)
    } else {
      setPostsList(state.posts);
    }
  }, [state.isSearching]);


  return (
    <div
      className={
        "PostList" +
        " PostList" +
        (state.theme === "light" ? "--light" : "--dark")
      }
    >
      <ul>
        {postsList.map((post, i) => (
          <li key={i}>
            <Post
              post={post}
              posts={state.posts}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
