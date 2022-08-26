import PlaceForm from "../components/Places/PlaceForm";

const AddPlace = ({navigation}) => {
  const newPlaceHandler = (newPlace) => {
    navigation.navigate("AllPlaces", {place: newPlace})
  }

  return <PlaceForm onNewPlace={newPlaceHandler}/>
}

export default AddPlace;

