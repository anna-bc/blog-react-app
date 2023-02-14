import "./Body.scss";

import { useContext } from "react";
import PostList from "../PostList/PostList";
import PostForm from "../PostForm/PostForm";
import Login from "../Login/Login";
import Search from "../Search";
import { StateContext } from "../../state/context/context";

export default function Body() {
  const { state, dispatch } = useContext(StateContext);

  return (
    <div
      className={
        "Body Body" + state.theme
      }
    >
      <div className="sideBarWrapper">
        <Search />
        {state.isLoggedIn ? (
          <PostForm />
        ) : (
          null
        )}
      </div>
      <div className="posts">
        <PostList />
      </div>
      <div className="sideBarWrapper">
        {!state.isLoggedIn ? <Login state={state} dispatch={dispatch} /> : null}
      </div>
    </div>
  );
}
