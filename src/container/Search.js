import { useEffect } from "react";
import useSearch from "../Hooks/useSearch";
import Actions from "../state/Actions/Actions";

export default function Search({state, dispatch}) {
  const [filteredList, setSearchTerm] = useSearch(state.posts);

  useEffect(() => {
    dispatch({ type: Actions.endSearch });
  }, [dispatch]);

  useEffect(() => {
    dispatch({
      type: Actions.searching,
      payload: { searchedList: filteredList },
    });
  }, [filteredList, dispatch]);

  return (
    <div className={"Search Search--" + state.theme}>
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
