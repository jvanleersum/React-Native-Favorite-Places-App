import { useEffect, useState } from "react";
import { ScrollView, View, Image, Text, StyleSheet } from "react-native";
import OutlinedButton from "../components/ui/OutlinedButton";
import { Colors } from "../constants/colors";
import { fetchPageDetails, fetchPlaces } from "../util/database";

const PlaceDetails = ({ route }) => {
  const [selectedPlace, setSelectedPlace] = useState();
  const selectedPlaceId = route.params.id;

  useEffect(() => {
    const getPlaceDetails = async() => {
      const fetchedPlace = await fetchPageDetails(selectedPlaceId)
      setSelectedPlace(fetchedPlace)
    }
    getPlaceDetails()
  }, [selectedPlaceId])

  const showOnMapHandler = () => {};

  return (
    <ScrollView>
      <Image style={styles.image} />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{selectedPlace.address}</Text>
        </View>
        <OutlinedButton icon="map" onPress={showOnMapHandler}>
          View on Map
        </OutlinedButton>
      </View>
    </ScrollView>
  );
};

export default PlaceDetails;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  image: {
    height: "35%",
    minHeight: 300,
    width: "100%",
  },
  locationContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: Colors.primary500,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});
