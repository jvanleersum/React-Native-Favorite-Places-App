import { Pressable, StyleSheet, View, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import { Colors } from "../../constants/colors";


const OutlinedButton = ({ icon, children, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Ionicons style={styles.icon} name={icon} size={18} color={Colors.primary700}/>
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  );
};

export default OutlinedButton;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 4,
    paddingVertical: 8,
    margin: 8,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: Colors.primary700,
    borderRadius: 6,
    width: 150,
  },
  icon: {
    marginRight: 4
  },
  buttonText: {
    textAlign: "center",
    fontSize: 18,
    color: Colors.primary700,
  },
  pressed: {
    opacity: 0.75,
  },
});
