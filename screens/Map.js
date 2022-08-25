import { useLayoutEffect, useState , useCallback} from "react";
import { Alert, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import IconButton from "../components/ui/IconButton";

const Map = ({ navigation }) => {
  const [selectedLocation, setSelectedLocation] = useState();
  
  const region = {
    latitude: 37.78,
    longitude: -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  
  const selectLocationHandler = (event) => {
    const lat = event.nativeEvent.coordinate.latitude;
    const lon = event.nativeEvent.coordinate.longitude;
    setSelectedLocation({ latitude: lat, longitude: lon });
  };
  
  const savePickedLocationHandler = useCallback(() => {
    if (!selectedLocation) {
      Alert.alert("No Location Selected", "Please select a location first")
      return;
    }
    navigation.navigate('AddPlace', {location: selectedLocation})
  }, [navigation, selectedLocation])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ({tintColor}) => <IconButton icon="save" color={tintColor} size={24} onPress={savePickedLocationHandler}/>
    })
  }, [navigation, savePickedLocationHandler])
  
  return (
    <MapView
      initialRegion={region}
      style={styles.map}
      onPress={selectLocationHandler}
    >
      {selectedLocation && <Marker
        title="Picked Location"
        coordinate={{
          latitude: selectedLocation.latitude,
          longitude: selectedLocation.longitude,
        }}
      />}
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
