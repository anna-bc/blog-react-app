import { useEffect, useState } from "react";

export default function useSearch(posts) {
  const [filteredList, setFilteredList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    let filtered = posts.filter(
      (post) =>
        (post.title.toLowerCase().includes(searchTerm) || post.content.toLowerCase().includes(searchTerm))
    );
    setFilteredList(filtered);
    console.log(filteredList);
  }, [posts, searchTerm]);

  return [filteredList, setSearchTerm];
}
