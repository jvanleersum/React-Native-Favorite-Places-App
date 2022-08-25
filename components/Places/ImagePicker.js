import { useState } from "react";
import { Alert, Button, Image, Text, View, StyleSheet } from "react-native";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import { Colors } from "../../constants/colors";
import OutlinedButton from "../ui/OutlinedButton";

const ImagePicker = () => {
  const [pickedImage, setPickedImage] = useState();

  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();

  const verifyPermissions = async () => {
    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }
    if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions!",
        "You need to grant camera permissions to use this app."
      );
      return false;
    }
    return true;
  };

  const takeImageHandler = async () => {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    setPickedImage(image)
  };

  let imagePreview = <Text>No image taken yet</Text>

  if (pickedImage) {
    imagePreview = <Image source={{uri: pickedImage.uri}} style={styles.image}/>
  }

  return (
    <View>
      <View style={styles.imageContainer}>
        {imagePreview}
      </View>
      <View style={styles.buttonContainer}>
      <OutlinedButton icon="camera" onPress={takeImageHandler}>Take image</OutlinedButton>
      </View>
    </View>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    height: 200,
    marginVertical: 8, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary100,
    borderRadius: 6
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 6
  },
  buttonContainer: {
    alignItems: 'center'
  }
})