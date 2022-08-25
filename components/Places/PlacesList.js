import { FlatList } from "react-native";
import PlacesListItem from "./PlacesListItem";

const PlacesList = ({places}) => {
  return <FlatList data={places} renderItem={({item}) => <PlacesListItem place={item} />} />
}

export default PlacesList;