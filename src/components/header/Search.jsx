import { useContext } from "react";
import { useDebounce } from "../../Hooks";
import SearchIcon from "../../assets/search.svg";
import { LocationContext } from "../../context";
import { getLocationByName } from "../../data/location-data";

const Search = () => {
  const { setSelectedLocation } = useContext(LocationContext);

  const doSearch = useDebounce((term) => {
    const selectedItem = getLocationByName(term);
    setSelectedLocation({ ...selectedItem });
  }, 500);

  const handleChange = (e) => {
    const value = e.target.value;

    doSearch(value);
  };

  return (
    <>
      <form action="#">
        <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
          <input
            className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
            type="search"
            placeholder="Search Location"
            required
            onChange={handleChange}
          />
          <button type="submit">
            <img src={SearchIcon} alt="Search Icon" />
          </button>
        </div>
      </form>
    </>
  );
};

export default Search;
