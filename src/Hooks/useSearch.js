import { useEffect, useState } from "react";

export default function useSearch(posts) {
  const [filteredList, setFilteredList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    console.log(searchTerm);
    let filtered = posts.filter(
      (post) =>
        post.title.includes(searchTerm) || post.content.includes(searchTerm)
    );
    setFilteredList(filtered);
  }, [posts, searchTerm]);

  return [filteredList, setSearchTerm];
}
