import { useContext, useEffect, useState } from "react";
import useSearch from "../Hooks/useSearch";
import Actions from "../state/Actions/Actions";
import { StateContext } from "../state/context/context";

export default function Search() {
  const { state, dispatch } = useContext(StateContext);
  const [filteredList, setSearchTerm] = useSearch(state.posts);

  useEffect(() => {
    dispatch({ type: Actions.endSearch });
  }, []);

  useEffect(() => {
    dispatch({
      type: Actions.searching,
      payload: { searchedList: filteredList },
    });
  }, [filteredList]);

  return (
    <div className={"Search" + " Search--" + state.theme}>
      <input
        id="searchInput"
        type="text"
        placeholder="Search for posts"
        onKeyDown={(e) => {
          setSearchTerm(e.target.value.toLowerCase());
        }}
      ></input>
    </div>
  );
}
