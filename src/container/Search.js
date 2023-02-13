import { useContext, useEffect, useState } from "react";
import useSearch from "../Hooks/useSearch";
import Actions from "../state/Actions/Actions";
import { StateContext } from "../state/context/context";

export default function Search() {
  const {state, dispatch} = useContext(StateContext);
  const [filteredList, setSearchTerm] = useSearch(state.posts);

  useEffect(() => {
    dispatch({type: Actions.endSearch});
  }, []);

  return (
    <div className={"Search" + " Search--" + state.theme}>
      <input
        type="text"
        placeholder="Search for posts"
        onInput={(e) => {
          if (e.target.value == "") {
            dispatch({type: Actions.endSearch})
          } else {
            console.log("searching");
            setSearchTerm(e.target.value);
            console.log(filteredList);
            dispatch({type: Actions.searching, payload: {searchedList: filteredList}});
          }
        }}
      ></input>
    </div>
  );
}
