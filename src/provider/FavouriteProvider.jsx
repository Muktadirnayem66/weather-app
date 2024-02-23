
import useLocalStorage from "../Hooks/useLocalStorage";
import { FavouriteContext } from "../context";

const FavouriteProvider = ({ children }) => {
  const [favourites, setFavourites ] = useLocalStorage("favourites", []);

  const addToFavourites = (location, longitude, latitude) => {
    setFavourites([
      ...favourites,
      {
        latitude,
        longitude,
        location
      } 
    ])

  };

  const removeFromFavourites = (location) => {
    const restFavourites = favourites.filter((fav)=>fav.location !== location)
    setFavourites(restFavourites)
  };

  return (
    <FavouriteContext.Provider
      value={{ favourites, addToFavourites, removeFromFavourites }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteProvider;
