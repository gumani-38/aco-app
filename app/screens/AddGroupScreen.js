import {
  Image,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { Entypo, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
const AddGroupScreen = () => {
  const navigation = useNavigation();
  const [banner, setBanner] = useState(null);
  const [image, setImage] = useState(null);
  const pickBanner = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setBanner(result.assets[0].uri);
    }
  };
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  const deleteBanner = async (uri) => {
    try {
      setBanner(null);
    } catch (err) {
      console.log("Error deleting image", err.message);
    }
  };
  const deleteImage = async (uri) => {
    try {
      setImage(null);
    } catch (err) {
      console.log("Error deleting image", err.message);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 7,
          marginBottom: 15,
        }}
      >
        <Pressable onPress={() => navigation.goBack()}>
          <View
            style={{
              backgroundColor: "#9B0E10",
              width: 30,
              height: 30,
              borderRadius: 15,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Entypo name="chevron-left" size={24} color="white" />
          </View>
        </Pressable>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Add new Group</Text>
        <Image
          source={require("../assets/aco-logo.png")}
          style={{
            width: 50,
            height: 50,
            resizeMode: "contain",
            borderRadius: 25,
          }}
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginHorizontal: 10 }}
      >
        {banner ? (
          <View
            style={{
              borderWidth: 2,
              borderRadius: 4,
              marginBottom: 20,
              borderColor: "#9F9F9F",
            }}
          >
            <Image
              source={{ uri: banner }}
              style={{
                borderRadius: 4,
                height: 100,
                width: "100%",
              }}
            />
            <Pressable
              onPress={() => deleteBanner(banner)}
              style={{
                backgroundColor: "#9B0E10",
                position: "absolute",
                top: 0,
                borderTopRightRadius: 4,
                padding: 4,
                right: -2,
              }}
            >
              <Feather name="trash-2" size={21} color="white" />
            </Pressable>
          </View>
        ) : (
          <View>
            <Pressable
              onPress={pickBanner}
              style={{
                backgroundColor: "#9F9F9F",
                borderRadius: 5,
                width: 90,
                height: 90,
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 20,
              }}
            >
              <Entypo name="camera" size={30} color="#9B0E10" />
              <Text
                style={{ fontSize: 14, color: "#001138", fontWeight: "500" }}
              >
                Banner
              </Text>
            </Pressable>
          </View>
        )}

        <View
          style={{
            backgroundColor: "white",
            padding: 8,
            borderRadius: 4,
            marginBottom: 20,
            borderWidth: 2,
            borderColor: "#9F9F9F",
          }}
        >
          <TextInput placeholder="enter group name" />
        </View>

        {image ? (
          <View
            style={{
              position: "relative",
              width: 92,
              height: 90,
              marginBottom: 20,
              borderRadius: 6,
              borderWidth: 2,
              borderColor: "#9F9F9F",
            }}
          >
            <Image
              source={{ uri: image }}
              style={{
                borderRadius: 5,
                width: 90,
                height: 90,
                resizeMode: "cover",
              }}
            />
            <Pressable
              onPress={() => deleteImage(image)}
              style={{
                backgroundColor: "#9B0E10",
                position: "absolute",
                top: 0,
                borderTopRightRadius: 4,
                padding: 4,
                right: -1,
              }}
            >
              <Feather name="trash-2" size={21} color="white" />
            </Pressable>
          </View>
        ) : (
          <View>
            <Pressable
              onPress={pickImage}
              style={{
                backgroundColor: "#9F9F9F",
                borderRadius: 5,
                width: 90,
                height: 90,
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 20,
              }}
            >
              <Entypo name="camera" size={30} color="#9B0E10" />
              <Text
                style={{ fontSize: 14, color: "#001138", fontWeight: "500" }}
              >
                Profile
              </Text>
            </Pressable>
          </View>
        )}

        <View
          style={{
            backgroundColor: "white",
            padding: 8,
            borderRadius: 4,
            marginBottom: 20,
            borderWidth: 2,
            borderColor: "#9F9F9F",
          }}
        >
          <TextInput
            placeholder="enter group description or goal"
            style={{
              minHeight: 100,
              color: "#001138",
              textAlignVertical: "top",
              borderColor: "#9F9F9F",
              marginBottom: 25,
            }}
          />
        </View>
        <Pressable
          style={{
            backgroundColor: "#9B0E10",
            padding: 10,
            borderRadius: 4,
            marginTop: 20,
            marginBottom: 30,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: "white",
              textAlign: "center",
            }}
          >
            Create Group
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddGroupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
