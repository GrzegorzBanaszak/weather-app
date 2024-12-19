import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="my-5 flex items-center gap-2 border-2 border-gray-100 rounded-full px-4 py-2">
      <FaSearch />
      <input
        className="outline-none"
        type="text"
        placeholder="Szukaj swojego miasta"
      />
    </div>
  );
};

export default SearchBar;
