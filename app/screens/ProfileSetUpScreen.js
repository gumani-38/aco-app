import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome, Feather, FontAwesome5 } from "@expo/vector-icons";
import { SelectList } from "react-native-dropdown-select-list";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";

const ProfileSetUpScreen = () => {
  const [selected, setSelected] = useState();
  const navigation = useNavigation();
  const [date, setDate] = useState(new Date());
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [image, setImage] = useState(null);
  const confirmIOSDate = () => {
    setDateOfBirth(date.toDateString());
    toggleDatePicker();
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };
  const onChange = ({ type }, selectedDate) => {
    if (type == "set") {
      const currentDate = selectedDate;
      setDate(currentDate);
      if (Platform.OS === "android") {
        toggleDatePicker();
        setDateOfBirth(currentDate.toDateString());
      }
    } else {
      toggleDatePicker();
    }
  };
  console.log(selected);
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView style={{ padding: 8 }}>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 20,
              marginBottom: 40,
            }}
          >
            <View>
              {image ? (
                <Image
                  source={{ uri: image }}
                  style={{
                    position: "relative",
                    padding: 10,
                    width: 140,
                    height: 140,
                    justifyContent: "center",
                    alignItems: "center",
                    borderWidth: 3,
                    resizeMode: "cover",
                    borderRadius: 70,
                    borderColor: "#9F9F9F",
                  }}
                />
              ) : (
                <View
                  style={{
                    position: "relative",
                    padding: 10,
                    width: 140,
                    height: 140,
                    justifyContent: "center",
                    alignItems: "center",
                    borderWidth: 3,
                    borderRadius: 70,
                    borderColor: "#9F9F9F",
                  }}
                >
                  <FontAwesome5 name="user" size={85} color="black" />
                </View>
              )}

              <Pressable
                onPress={pickImage}
                style={{
                  position: "absolute",
                  backgroundColor: "#9B0E10",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 34,
                  height: 34,
                  borderRadius: 17,
                  bottom: 12,
                  right: 2,
                }}
              >
                <View>
                  <FontAwesome name="camera" size={20} color="white" />
                </View>
              </Pressable>
            </View>
          </View>
          <TextInput
            style={{
              paddingVertical: 7,
              paddingHorizontal: 8,
              backgroundColor: "white",
              borderWidth: 3,
              borderRadius: 4,
              marginBottom: 20,
              color: "#001138",
              borderColor: "#9F9F9F",
              marginBottom: 25,
            }}
            placeholder="enter your location, like pretoria, sandton etc..."
            placeholderTextColor={"#9F9F9F"}
          />

          <TextInput
            style={{
              paddingVertical: 7,
              paddingHorizontal: 8,
              backgroundColor: "white",
              borderWidth: 3,
              borderRadius: 4,
              marginBottom: 20,
              color: "#001138",
              borderColor: "#9F9F9F",
              marginBottom: 25,
            }}
            placeholder="enter your profession, like artist, pr manager etc..."
            placeholderTextColor={"#9F9F9F"}
          />
          <TextInput
            style={{
              paddingVertical: 7,
              paddingHorizontal: 8,
              backgroundColor: "white",
              borderWidth: 3,
              borderRadius: 4,
              marginBottom: 20,
              color: "#001138",
              borderColor: "#9F9F9F",
              marginBottom: 25,
            }}
            placeholder="enter your gender"
            placeholderTextColor={"#9F9F9F"}
          />

          <View>
            {showDatePicker && (
              <DateTimePicker
                mode="date"
                display="spinner"
                value={date}
                onChange={onChange}
                style={{ height: 120, marginTop: -10 }}
              />
            )}
            {showDatePicker && Platform.OS === "ios" && (
              <View
                style={{ flexDirection: "row", justifyContent: "space-around" }}
              >
                <TouchableOpacity
                  onPress={toggleDatePicker}
                  style={{
                    backgroundColor: "#9F9F9F",
                    borderRadius: 4,
                    padding: 4,
                  }}
                >
                  <Text style={{ color: "#075985", textAlign: "center" }}>
                    Cancel
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={confirmIOSDate}
                  style={{ backgroundColor: "#9B0E10", borderRadius: 4 }}
                >
                  <Text
                    style={{
                      color: "white",
                      textAlign: "center",
                      padding: 4,
                    }}
                  >
                    Confirm
                  </Text>
                </TouchableOpacity>
              </View>
            )}
            {!showDatePicker && (
              <Pressable onPress={toggleDatePicker}>
                <TextInput
                  style={{
                    paddingVertical: 7,
                    paddingHorizontal: 8,
                    backgroundColor: "white",
                    borderWidth: 3,
                    borderRadius: 4,
                    color: "#001138",
                    marginBottom: 20,
                    borderColor: "#9F9F9F",
                    marginBottom: 25,
                  }}
                  value={dateOfBirth}
                  editable={false}
                  onChangeText={setDateOfBirth}
                  placeholder="enter your date of birth"
                  placeholderTextColor={"#9F9F9F"}
                  onPressIn={toggleDatePicker}
                />
              </Pressable>
            )}
          </View>
          <Pressable
            style={{ marginBottom: 25, marginTop: 30 }}
            onPress={() => navigation.navigate("Main")}
          >
            <View
              style={{
                backgroundColor: "#9B0E10",
                padding: 10,
                borderRadius: 4,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 18,
                  fontWeight: "600",
                  color: "#fff",
                }}
              >
                Save
              </Text>
            </View>
          </Pressable>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ProfileSetUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
