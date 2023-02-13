import "./App.scss";
import Header from "./container/Header/Header";
import Body from "./container/Body/Body";
import { useEffect, useReducer, useState } from "react";
import { StateContext } from "./state/context/context";
import stateReducer from "./state/reducers/stateReducer";
import initialState from "./state/initialState";
import Actions from "./state/Actions/Actions";

function App() {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  useEffect(() => {
    let storedTheme = JSON.parse(localStorage.getItem("theme"));
    if (!storedTheme) {
      storedTheme =  "light";
    }
    dispatch({type: Actions.setTheme, payload: {theme: storedTheme}});

  }, []);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(state.theme));
  }, [state.theme]);

  useEffect(() => {
    console.log(state.posts);
    if (state.posts.length) {
      return;
    }
    let storedPosts = JSON.parse(localStorage.getItem("posts"));
    if (!storedPosts) {
      console.log("using hardcoded posts");
      storedPosts = [
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
    dispatch({type: Actions.addPosts, payload: { posts: storedPosts }});
  }, []);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(state.posts));
  }, [state.posts]);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <div
        className={
          "blogWrapper" +
          " blogWrapper--" +
          state.theme
        }
      >
        <Header />
        <Body />
      </div>
    </StateContext.Provider>
  );
}

export default App;
