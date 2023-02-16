import "./PostList.scss";
import Post from "../Post/Post";
import { useContext, useEffect, useState } from "react";
import { StateContext } from "../../state/context/context";
import { useNavigate } from "react-router-dom";

export default function PostList() {
  const { state, dispatch } = useContext(StateContext);
  const [postsList, setPostsList] = useState([]);
  const navigate = useNavigate();

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
    <div className={"PostList PostList--" + state.theme}>
      { state.isLoggedIn ? (
        <div className="PostList__button">
          <button onClick={() => navigate("/newPost")}>Create New Post</button>
        </div>
      ) : null}
      <ul>
        {postsList.map((post, i) => (
          <li key={i}>
            <Post post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
}
