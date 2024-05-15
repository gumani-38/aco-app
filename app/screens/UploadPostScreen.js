import {
  Platform,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  View,
  Image,
  FlatList,
  KeyboardAvoidingView,
} from "react-native";
import React, { useRef, useState } from "react";
import { EvilIcons, FontAwesome, Entypo, Feather } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { ResizeMode, Video } from "expo-av";

const UploadPostScreen = () => {
  const [medias, setMedias] = useState([]);
  const pickImage = async () => {
    //render a video component

    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      allowsMultipleSelection: true,
      aspect: [8, 7],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setMedias([...medias, ...result.assets]);
    }
  };
  console.log("length ", medias.length);
  const deleteImage = async (uri) => {
    try {
      setMedias(medias.filter((i) => i.uri !== uri));
    } catch (err) {
      console.log("Error deleting image", err.message);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          style={{ padding: 7, paddingVertical: 20 }}
          showsVerticalScrollIndicator={false}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 40,
            }}
          >
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {medias?.map((item, index) => (
                <View style={{ position: "relative" }}>
                  {item?.type === "video" ? (
                    <>
                      <Video
                        source={{ uri: item?.uri }}
                        style={{
                          width: 90,
                          height: 90,
                          borderRadius: 4,
                          marginHorizontal: 4,
                        }}
                        resizeMode={ResizeMode.COVER}
                        shouldPlay
                        isLooping
                        isMuted
                      />
                      <Pressable
                        onPress={() => deleteImage(item?.uri)}
                        style={{
                          backgroundColor: "#9B0E10",
                          position: "absolute",
                          top: 0,
                          borderTopRightRadius: 4,
                          padding: 2,
                          right: 4,
                        }}
                      >
                        <Feather name="trash-2" size={21} color="white" />
                      </Pressable>
                    </>
                  ) : (
                    <>
                      <Image
                        source={{ uri: item?.uri }}
                        style={{
                          width: 90,
                          height: 90,
                          borderRadius: 4,
                          marginHorizontal: 4,
                        }}
                      />
                      <Pressable
                        onPress={() => deleteImage(item?.uri)}
                        style={{
                          backgroundColor: "#9B0E10",
                          position: "absolute",
                          top: 0,
                          borderTopRightRadius: 4,
                          padding: 2,
                          right: 4,
                        }}
                      >
                        <Feather name="trash-2" size={21} color="white" />
                      </Pressable>
                    </>
                  )}
                </View>
              ))}
              <Pressable
                onPress={pickImage}
                style={{
                  backgroundColor: "#9F9F9F",
                  borderRadius: 5,
                  width: 90,
                  height: 90,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Entypo name="camera" size={30} color="#9B0E10" />
              </Pressable>
            </ScrollView>
          </View>
          <View style={{ marginTop: 18 }}>
            <View>
              <TextInput
                style={{
                  paddingVertical: 7,
                  paddingHorizontal: 8,
                  backgroundColor: "white",
                  borderWidth: 3,
                  borderRadius: 4,
                  color: "#001138",
                  borderColor: "#9F9F9F",
                  marginBottom: 25,
                }}
                placeholder="enter your title"
                placeholderTextColor={"#9F9F9F"}
              />
            </View>

            <View>
              <TextInput
                style={{
                  paddingVertical: 7,
                  paddingHorizontal: 8,
                  backgroundColor: "white",
                  borderWidth: 3,
                  borderRadius: 4,
                  minHeight: 160,
                  color: "#001138",
                  textAlignVertical: "top",
                  borderColor: "#9F9F9F",
                  marginBottom: 25,
                }}
                placeholder="enter  caption..."
                multiline={true}
                placeholderTextColor={"#9F9F9F"}
              />
            </View>

            <View>
              <TextInput
                style={{
                  paddingVertical: 7,
                  paddingHorizontal: 8,
                  backgroundColor: "white",
                  borderWidth: 3,
                  color: "#001138",
                  borderRadius: 4,
                  borderColor: "#9F9F9F",
                }}
                placeholder="enter tags (optional)"
                placeholderTextColor={"#9F9F9F"}
              />
              <Text
                style={{
                  flex: 1,
                  fontSize: 12,
                  fontWeight: "700",
                  marginTop: 3,
                  marginBottom: 15,
                }}
              >
                Tags should be seperated by comma( creative,africa,etc)
              </Text>
            </View>
          </View>
          <Pressable
            style={{
              backgroundColor: "#9B0E10",
              padding: 10,
              borderRadius: 5,
              marginTop: 35,
              alignItems: "center",
              flexDirection: "row",
              marginBottom: 40,
              gap: 80,
            }}
          >
            <Entypo
              style={{ marginHorizontal: 14 }}
              name="upload-to-cloud"
              size={24}
              color="white"
            />
            <Text
              style={{
                textAlign: "center",
                fontSize: 18,
                fontWeight: "bold",
                color: "#fff",
                alignItems: "center",
              }}
            >
              Upload Post
            </Text>
          </Pressable>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default UploadPostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
