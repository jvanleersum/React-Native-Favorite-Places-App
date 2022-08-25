import { FlatList } from "react-native";

const PlacesList = ({places}) => {
  return <FlatList data={places} renderItem={(itemData) => {}}/>
}

export default PlacesList;