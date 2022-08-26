import { Image, Pressable, Text, View, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

const PlacesListItem = ({place, onPress}) => {
  return <Pressable onPress={onPress} style={({pressed}) => [styles.container, pressed && styles.pressed]}>
    <Image source={{uri: place.imageUri}} style={styles.image}/>
    <View style={styles.info}>
      <Text style={styles.title}>{place.title}</Text>
      <Text style={styles.address}>{place.address}</Text>
    </View>
  </Pressable>
}

export default PlacesListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 12,
    marginHorizontal: 6,
    borderRadius: 6,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.15,
    shadowRadius: 4,
    backgroundColor: 'white'
  },
  image: {
    flex: 1,
    height: 100,
    borderBottomLeftRadius: 6, 
    borderTopLeftRadius: 6
  },
  pressed: {
    opacity: 0.75
  },
  info: {
    flex: 2, 
    padding: 12
  },
  title: {
    fontSize: 18, 
    fontWeight: 'bold',
    marginBottom: 2,
    color: Colors.gray700
  },
  address:{
    fontSize: 12, 
    color: Colors.gray700
  },
})