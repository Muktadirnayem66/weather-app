
import Page from "./Page";
import { FavouriteProvider, LocationProvider, WeatherProvider } from "./provider";

const App = () => {
  return (
    <LocationProvider>
    <WeatherProvider>
      <FavouriteProvider>
    <Page/>
    </FavouriteProvider>
    </WeatherProvider>
    </LocationProvider>
  );
};

export default App;
