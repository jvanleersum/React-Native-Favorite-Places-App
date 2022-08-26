import { FlatList, Text, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../../constants/colors";
import PlacesListItem from "./PlacesListItem";

const PlacesList = ({ places }) => {
  const navigation = useNavigation();

  if (!places || places.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>
          No places added yet - start adding some!
        </Text>
      </View>
    );
  }

  const renderPlaceItem = ({item}) => {
    return <PlacesListItem place={item} onPress={() => {
      navigation.navigate("PlaceDetails", {id: item.id})
    }} />
  }

  return (
    <FlatList
      style={styles.list}
      data={places}
      renderItem={renderPlaceItem}
    />
  );
};

export default PlacesList;

const styles = StyleSheet.create({
  list: {
    margin: 16
  },
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fallbackText: {
    fontSize: 16,
    color: Colors.primary500
  },
});
