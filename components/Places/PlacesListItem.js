import { Image, Pressable, Text, View, StyleSheet } from "react-native";

const PlacesListItem = ({place, onPress}) => {
  return <Pressable onPress={onPress}>
    <Image source={{uri: place.imageUri}}/>
    <View>
      <Text>{place.title}</Text>
      <Text>{place.address}</Text>
    </View>
  </Pressable>
}

export default PlacesListItem;

const styles = StyleSheet.create({
  
})