import { useContext, useEffect, useState } from "react";
import HeartIcon from "../../assets/heart.svg";
import HeartRedIcon from "../../assets/heart-red.svg";

import { FavouriteContext, WeatherContext } from "../../context";

const AddToFavourite = () => {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouriteContext);
    const {weatherData } = useContext(WeatherContext)
  const [isFavourite, favouriteToggle] = useState(false);
  const {location, longitude, latitude} = weatherData

  useEffect(()=>{

    const found = favourites.find((fav)=>fav.location === location)
    favouriteToggle(found)

  },[])

  const handleFavourite = () => {
    const found = favourites.find((fav)=>fav.location === location)
    if(!found) {
      addToFavourites(location, longitude, latitude)
    }else{
      removeFromFavourites(location)
    }
    favouriteToggle(!isFavourite);
  };
  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
          onClick={handleFavourite}
        >
          <span>Add to Favourite</span>
          <img src={isFavourite ? HeartRedIcon : HeartIcon} alt="Heart Icon" />
        </button>
      </div>
    </div>
  );
};

export default AddToFavourite;
