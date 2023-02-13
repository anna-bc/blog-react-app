import "./Body.scss";

import { useContext, useEffect, useState } from "react";
import PostList from "../PostList/PostList";
import PostForm from "../PostForm/PostForm";
import Login from "../Login/Login";
import Search from "../Search";
import { StateContext } from "../../state/context/context";

export default function Body() {
  const { state, dispatch } = useContext(StateContext);
  // declare State variables
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const [postList, setPostList] = useState(() => {
  //   let posts = JSON.parse(localStorage.getItem("posts"));
  //   if (!posts) {
  //     return [
  //       {
  //         id: "1",
  //         title: "Test",
  //         content: "test",
  //         author: "anna",
  //         comments: [],
  //       },
  //       {
  //         id: "2",
  //         title: "Testing again",
  //         content:
  //           "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  //         author: "anna",
  //         comments: [{ author: "benni", content: "Hello Anna!" }],
  //       },
  //     ];
  //   }
  //   return posts;
  // });

  // const [isSearching, setIsSearching] = useState(false);
  // const [searchList, setSearchList] = useState([]);

  // useEffect(() => {
  //   localStorage.setItem("posts", JSON.stringify(postList));
  // }, [postList]);

  return (
    <div
      className={
        "Body" + " Body" + (state.theme === "light" ? "--light" : "--dark")
      }
    >
      <div className="sideBarWrapper">
        {/* <Search /> */}
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
        {!state.isLoggedIn ? <Login /> : null}
      </div>
    </div>
  );
}
