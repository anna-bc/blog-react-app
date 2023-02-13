import { useEffect, useState } from "react";
import useSearch from "../Hooks/useSearch";

export default function Search(props) {
  const [filteredList, setSearchTerm] = useSearch(props.posts);


  return (
    <div className={"Search" + " Search--" + props.theme}>
      <input
        type="text"
        placeholder="Search for posts"
        onInput={(e) => {
          if (e.target.value == "") {
            props.setIsSearching(false);
          } else {
            setSearchTerm(e.target.value);
            props.showFilteredList(filteredList);
            props.setIsSearching(true);
          }
        }}
      ></input>
    </div>
  );
}
