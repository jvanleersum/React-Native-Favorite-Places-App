import { View, StyleSheet, Alert } from "react-native";
import { getCurrentPositionAsync, useForegroundPermissions, PermissionStatus } from "expo-location";

import OutlinedButton from "../ui/OutlinedButton";
import { Colors } from "../../constants/colors";
import { useState } from "react";

const LocationPicker = () => {
  const [userLocation, setUserLocation] = useState();
  const [locationPermissionInformation, requestPermission] = useForegroundPermissions();

  const verifyPermissions = async () => {
    if (locationPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }
    if (locationPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions!",
        "You need to grant location permissions to use this app."
      );
      return false;
    }
    return true;
  };
  
  const currentLocationHandler = async () => {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }
    const location = await getCurrentPositionAsync();
    console.log(location)
    setUserLocation(location)
  }

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