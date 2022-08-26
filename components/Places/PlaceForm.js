import { useState } from "react";
import { StyleSheet, View, Text, ScrollView, TextInput } from "react-native";
import { Colors } from "../../constants/colors";
import Button from "../ui/Button";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";

const PlaceForm = () => {
  const [enteredTitle, setEnteredTitle] = useState();

  const changeTitleHandler = ({ enteredText }) => {
    setEnteredTitle(enteredText);
  };

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={changeTitleHandler}
          value={enteredTitle}
        />
      </View>
      <ImagePicker />
      <LocationPicker />
      <View style={styles.buttonContainer}>
      <Button>Add Place</Button>
      </View>
    </ScrollView>
  );
};

export default PlaceForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 4,
    color: Colors.primary700,
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 2,
    marginVertical: 4,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    color: Colors.primary800,
    fontSize: 20
  },
  buttonContainer: {
    marginVertical: 8
  }
});
