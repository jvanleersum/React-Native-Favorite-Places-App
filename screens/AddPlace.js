import PlaceForm from "../components/Places/PlaceForm";
import { insertPlace } from "../util/database";

const AddPlace = ({navigation}) => {
  const newPlaceHandler = async (newPlace) => {
    const response = await insertPlace(newPlace);
    navigation.navigate("AllPlaces")
  }

  return <PlaceForm onNewPlace={newPlaceHandler}/>
}

export default AddPlace;

