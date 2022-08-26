import { Pressable, StyleSheet, Text } from "react-native";
import { Colors } from "../../constants/colors";


const Button = ({ children, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 4,
    paddingVertical: 9,
    margin: 8,
    backgroundColor: Colors.primary700,
    borderRadius: 6,
    minWidth: 150
  },
  buttonText: {
    textAlign: "center",
    color: 'white'
  },
  pressed: {
    opacity: 0.75,
  },
});
