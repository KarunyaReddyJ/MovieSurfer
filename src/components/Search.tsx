import React from "react";
import { MovieQuery } from "../App";
import { useSearch } from "../store/useSearch"; 
import {movies} from "../utils/MoviesList";
interface SearchProps {
  s: string;
  setData: React.Dispatch<React.SetStateAction<MovieQuery>>;
}
function Search(props: SearchProps) {
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();
    props.setData(prev=>({
        ...prev,
        search:true
    }))
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setData((prev) => ({
      ...prev,
      s: e.target.value,
    }));
  };
  const {searchQuery,setSearchQuery}=useSearch()
  return (
    <form onSubmit={handleSubmit} className="flex justify-around mx-auto w-8/12 py-5">
      <input
        type="text"
        name="s"
        value={searchQuery}
        onChange={handleInputChange}
        className="w-9/12 px-4 h-12 rounded-full"
        placeholder={movies[1]}
      />
      <input type="submit" value="search" className="bg-zinc-800 px-5 rounded-lg border-gray-600 border-2" />
    </form>
  );
}

export default Search;
