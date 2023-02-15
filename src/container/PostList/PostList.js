import "./PostList.scss";
import Post from "../Post/Post";
import { useEffect, useState } from "react";

export default function PostList({state}) {
  const [postsList, setPostsList] = useState([]);

  useEffect(() => {
    setPostsList([...state.posts]);
  }, []);

  useEffect(() => {
    if (state.isSearching) {
      setPostsList([...state.searchList]);
    } else {
      setPostsList([...state.posts]);
    }
  }, [state.searchList]);


  return (
    <div
      className={
        "PostList PostList--" +
        state.theme
      }
    >
      <ul>
        {postsList.map((post, i) => (
          <li key={i}>
            <Post
              post={post}
            
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
