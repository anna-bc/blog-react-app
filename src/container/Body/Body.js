import "./Body.scss";

import { useEffect, useState } from "react";
import PostList from "../PostList/PostList";
import PostForm from "../PostForm/PostForm";
import Login from "../Login/Login";
import Search from "../Search";

export default function Body(props) {
  // declare State variables
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [postList, setPostList] = useState(() => {
    let posts = JSON.parse(localStorage.getItem("posts"));
    if (!posts) {
      return [
        {
          id: "1",
          title: "Test",
          content: "test",
          author: "anna",
          comments: [],
        },
        {
          id: "2",
          title: "Testing again",
          content:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
          author: "anna",
          comments: [{author: 'benni', content: "Hello Anna!"}],
        },
      ];
    }
    return posts;
  });

  const [isSearching, setIsSearching] = useState(false);
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(postList));
  }, [postList]);

  return (
    <div
      className={
        "Body" + " Body" + (props.theme === "light" ? "--light" : "--dark")
      }
    >
      <div className="sideBarWrapper">
        <Search
          theme={props.theme}
          posts={postList}
          showFilteredList={(list) => setSearchList(list)}
          setIsSearching={setIsSearching}

        />
        {isLoggedIn ? (
          <PostForm
            addPost={(post) => {
              setPostList([...postList, post]);
            }}
            theme={props.theme}
            setTheme={props.setTheme}
          />
        ) : (
          <></>
        )}
      </div>
      <div className="posts">
      {!isSearching ? (
      <PostList
          list={postList}
          setPostList={setPostList}
          removePost={(post) => {
            let idx = postList.indexOf(post);
            let newPosts = postList.filter((el, i) => idx !== i);
            setPostList([...newPosts]);
          }}
          isLoggedIn={isLoggedIn}
          theme={props.theme}
          setTheme={props.setTheme}
        />) : (<PostList
          list={searchList}
          setPostList={setPostList}
          removePost={(post) => {
            let idx = postList.indexOf(post);
            let newPosts = postList.filter((el, i) => idx !== i);
            setPostList([...newPosts]);
          }}
          isLoggedIn={isLoggedIn}
          theme={props.theme}
          setTheme={props.setTheme}
        />)}
      </div>
      <div className="sideBarWrapper">
        {!isLoggedIn ? (
          <Login
            setIsLoggedIn={setIsLoggedIn}
            theme={props.theme}
            setTheme={props.setTheme}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
