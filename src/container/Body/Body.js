import "./Body.scss";
import { useContext } from "react";
import Search from "../Search";
import { StateContext } from "../../state/context/context";
import AppRoutes from "../../AppRoutes";

export default function Body() {
  const { state, dispatch } = useContext(StateContext);

  return (
    <div className={"Body Body--" + state.theme}>
      <div className="sideBarWrapper">
        <Search state={state} dispatch={dispatch} />
        {/* {state.isLoggedIn ? (
          <PostForm state={state} dispatch={dispatch} />
        ) : null} */}
      </div>
      <div className="posts">
        <AppRoutes />
      </div>
      <div className="sideBarWrapper">
        {/* {!state.isLoggedIn ? <Login state={state} dispatch={dispatch} /> : null} */}
      </div>
    </div>
  );
}
