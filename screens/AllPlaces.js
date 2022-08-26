import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import PlacesList from "../components/Places/PlacesList";
import { fetchPlaces } from "../util/database";

const AllPlaces = () => {
  const [loadedPlaces, setLoadedPlaces] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    const getPlaces = async () => {
      if (isFocused) {
        const places = await fetchPlaces();
        setLoadedPlaces(places);
      }
    };
    getPlaces();
  }, [isFocused]);

  console.log(loadedPlaces);

  return <PlacesList places={loadedPlaces} />;
};

export default AllPlaces;
