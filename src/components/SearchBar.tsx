import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useAppDispatch } from "../app/hooks";
import { searchLocations } from "../features/favoritesLocation/favoriteLocationSlice";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const dispatch = useAppDispatch();

  const searchQueryPressHandler = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      dispatch(searchLocations(searchQuery));
    }
  };

  return (
    <div className="my-5 flex items-center gap-2 border-2 border-gray-100 rounded-full px-4 py-2">
      <FaSearch />
      <input
        className="outline-none"
        type="text"
        onKeyDown={searchQueryPressHandler}
        onChange={(e) => setSearchQuery(e.target.value)}
        value={searchQuery}
        placeholder="Szukaj swojego miasta"
      />
    </div>
  );
};

export default SearchBar;
