import PlaceForm from "../components/Places/PlaceForm";

const AddPlace = () => {
  const newPlaceHandler = (newPlace) => {
    console.log(newPlace)
  }

  return <PlaceForm onNewPlace={newPlaceHandler}/>
}

export default AddPlace;

