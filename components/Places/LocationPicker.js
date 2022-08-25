import { View, StyleSheet } from "react-native";
import OutlinedButton from "../ui/OutlinedButton";

const LocationPicker = () => {
  return <View>
    <View>
    
    </View>
    <View style={styles.buttonsContainer}>
      <OutlinedButton icon="location">Current location</OutlinedButton>
      <OutlinedButton icon="map">Select on map</OutlinedButton>
    </View>
  </View>
}

export default LocationPicker;

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})