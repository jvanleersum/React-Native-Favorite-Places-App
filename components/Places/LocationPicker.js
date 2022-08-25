import { View, StyleSheet } from "react-native";

import OutlinedButton from "../ui/OutlinedButton";
import { Colors } from "../../constants/colors";

const LocationPicker = () => {
  const currentLocationHandler = () => {}

  const selectOnMapHandler = () => {}

  return <View>
    <View style={styles.mapPreview}>
    
    </View>
    <View style={styles.buttonsContainer}>
      <OutlinedButton icon="location" onPress={currentLocationHandler}>Current location</OutlinedButton>
      <OutlinedButton icon="map" onPress={selectOnMapHandler}>Select on map</OutlinedButton>
    </View>
  </View>
}

export default LocationPicker;

const styles = StyleSheet.create({
  mapPreview: {
    width: "100%",
    height: 200,
    marginVertical: 8, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary100,
    borderRadius: 6
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})