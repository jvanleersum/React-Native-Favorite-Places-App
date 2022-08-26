import { useEffect, useState } from "react";
import { ScrollView, View, Image, Text, StyleSheet } from "react-native";
import OutlinedButton from "../components/ui/OutlinedButton";
import { Colors } from "../constants/colors";
import { fetchPageDetails } from "../util/database";

const PlaceDetails = ({ route, navigation }) => {
  const [selectedPlace, setSelectedPlace] = useState();
  const selectedPlaceId = route.params.id;

  useEffect(() => {
    const getPlaceDetails = async () => {
      const fetchedPlace = await fetchPageDetails(selectedPlaceId);
      setSelectedPlace(fetchedPlace);
      console.log(fetchedPlace)
      navigation.setOptions({ title: fetchedPlace.title });
    };
    getPlaceDetails();
  }, [selectedPlaceId]);

  const showOnMapHandler = () => {
    console.log(selectedPlace)
    navigation.navigate("Map", {
      location: {
        lat: selectedPlace.location.lat,
        lng: selectedPlace.location.lng,
      },
      title: selectedPlace.title,
    });
  };

  if (!selectedPlace) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>Loading place details...</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedPlace.imageUri }} />
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
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fallbackText: {
    fontSize: 16,
    color: Colors.primary500,
  },
});
