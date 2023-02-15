import React, { useContext } from "react"
import { Route, Routes } from "react-router-dom";
import PostListPage from "./components/Pages/PostListPage";
import Login from "./container/Login/Login";
import PostForm from "./container/PostForm/PostForm";
import { StateContext } from "./state/context/context";

function AppRoutes() {
  const { state, dispatch } = useContext(StateContext);

  return (
    <Routes>
        <Route path={"/"} element={<PostListPage />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/newPost"} element={<PostForm state={state} dispatch={dispatch} />} />

    </Routes>
  )
};

export default AppRoutes;
