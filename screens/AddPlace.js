import PlaceForm from "../components/Places/PlaceForm";
import { insertPlace } from "../util/database";

const AddPlace = ({navigation}) => {
  const newPlaceHandler = async (newPlace) => {
    const result = await insertPlace(newPlace);
    navigation.navigate("AllPlaces", {place: newPlace})
  }

  return <PlaceForm onNewPlace={newPlaceHandler}/>
}

export default AddPlace;

