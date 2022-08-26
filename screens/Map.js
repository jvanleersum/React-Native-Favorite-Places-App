import { useLayoutEffect, useState, useCallback } from "react";
import { Alert, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import IconButton from "../components/ui/IconButton";

const Map = ({ navigation, route }) => {
  const initialLocation = route.params && {
    lat: route.params.location.lat,
    lng: route.params.location.lng,
  };
  const initialLocationTitle = route.params && route.params.title;

  const [selectedLocation, setSelectedLocation] = useState(initialLocation);
  console.log(route.params)
  const region = {
    latitude: initialLocation ? initialLocation.lat : 52.37,
    longitude: initialLocation ? initialLocation.lng : 4.89,
    latitudeDelta: 0.0522,
    longitudeDelta: 0.0521,
  };

  const selectLocationHandler = (event) => {
    if (initialLocation) {
      const lat = event.nativeEvent.coordinate.latitude;
      const lon = event.nativeEvent.coordinate.longitude;
      setSelectedLocation({ latitude: lat, longitude: lon });
    }
  };

  const savePickedLocationHandler = useCallback(() => {
    if (!selectedLocation) {
      Alert.alert("No Location Selected", "Please select a location first");
      return;
    }
    navigation.navigate("AddPlace", { location: selectedLocation });
  }, [navigation, selectedLocation]);

  useLayoutEffect(() => {
    if (initialLocation) {
      return;
    }
    navigation.setOptions({
      headerRight: ({ tintColor }) => (
        <IconButton
          icon="save"
          color={tintColor}
          size={24}
          onPress={savePickedLocationHandler}
        />
      ),
    });
  }, [navigation, savePickedLocationHandler, initialLocation]);

  return (
    <MapView
      initialRegion={region}
      style={styles.map}
      onPress={selectLocationHandler}
    >
      {selectedLocation && (
        <Marker
          title={initialLocationTitle ? initialLocationTitle : "Picked Location"}
          coordinate={{
            latitude: initialLocation ? initialLocation.lat : selectedLocation.latitude,
            longitude: initialLocation ? initialLocation.lng :selectedLocation.longitude,
          }}
        />
      )}
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
