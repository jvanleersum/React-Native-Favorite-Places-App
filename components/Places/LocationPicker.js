import { useEffect, useState } from "react";
import { View, StyleSheet, Alert, Image, Text } from "react-native";
import { useNavigation, useRoute, useIsFocused } from "@react-navigation/native";
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
} from "expo-location";

import OutlinedButton from "../ui/OutlinedButton";
import { Colors } from "../../constants/colors";
import { getMapPreview } from "../../util/location";

const LocationPicker = () => {
  const [userLocation, setUserLocation] = useState();
  const [locationPermissionInformation, requestPermission] =
  useForegroundPermissions();

  const navigation = useNavigation();
  const route = useRoute()
  const isFocused = useIsFocused();
  const pickedLocation = route.params?.location

  useEffect(() => {
    if (isFocused && pickedLocation) {
      setUserLocation(pickedLocation)
    }
  }, [pickedLocation, isFocused])

  const verifyPermissions = async () => {
    if (
      locationPermissionInformation.status === PermissionStatus.UNDETERMINED
    ) {
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
    console.log(location.coords);
    const coordinates = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };
    setUserLocation(coordinates);
  };

  const selectOnMapHandler = () => {
    navigation.navigate("Map");
  };

  let mapPreview = <Text>No location selected yet</Text>;

  if (userLocation) {
    mapPreview = (
      <Image
        source={{
          uri: getMapPreview(userLocation.latitude, userLocation.longitude),
        }}
        style={styles.image}
      />
    );
  }

  return (
    <View>
      <View style={styles.mapPreviewContainer}>{mapPreview}</View>
      <View style={styles.buttonsContainer}>
        <OutlinedButton icon="location" onPress={currentLocationHandler}>
          Current location
        </OutlinedButton>
        <OutlinedButton icon="map" onPress={selectOnMapHandler}>
          Select on map
        </OutlinedButton>
      </View>
    </View>
  );
};

export default LocationPicker;

const styles = StyleSheet.create({
  mapPreviewContainer: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 6,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 6,
  },
});
