import "react-native-gesture-handler";
import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
  Share,
  KeyboardAvoidingView,
} from "react-native";
import React, { useRef, useState } from "react";
import {
  FontAwesome,
  AntDesign,
  Feather,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

const FeedScreen = () => {
  const navigation = useNavigation();
  const bottomSheetModalRef = useRef(null);
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState(new Array(25).fill(""));
  const [headline, setHeadline] = useState(new Array(10).fill(""));
  const snapPoints = ["56%"];

  function handlePresentModal() {
    bottomSheetModalRef.current?.present();
  }
  function handleCloseModal() {
    bottomSheetModalRef.current?.close();
  }
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: "https://www.africaconnectonline.com/",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log("shared with activity type of : " + result.activityType);
        } else {
          console.log("shared");
        }
      } else if (result.action === Share.dismissedAction) {
        console.log("dismissed");
      }
    } catch (error) {
      console.log("failed to share : ", error);
    }
  };
  return (
    <>
      <View style={{ padding: 4, flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Text
              style={{ fontWeight: "bold", fontSize: 16, marginVertical: 9 }}
            >
              HeadLines
            </Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {headline.map((item, index) => (
              <View
                key={index}
                style={{ position: "relative", marginHorizontal: 2 }}
              >
                <Pressable onPress={() => navigation.navigate("ViewHeadline")}>
                  <Image
                    source={require("../assets/post.jpg")}
                    style={{ width: 120, height: 150, borderRadius: 4 }}
                  />
                  <Text
                    style={{
                      fontSize: 10,
                      fontWeight: "500",
                      width: 120,
                      position: "absolute",
                      bottom: 3,
                      color: "white",
                      marginHorizontal: 3,
                    }}
                  >
                    Greatest PR managers tips of success
                  </Text>
                </Pressable>
              </View>
            ))}
          </ScrollView>
          <View
            style={{
              flex: 1,
              backgroundColor: "#fff",
              borderRadius: 7,
              padding: 7,
              width: Dimensions.get("window").width,
              marginVertical: 15,
              marginBottom: 20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 7,
                gap: 3,
                justifyContent: "space-between",
              }}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
              >
                <Image
                  style={{ width: 40, height: 40, borderRadius: 20 }}
                  source={require("../assets/profile.jpeg")}
                />
                <View>
                  <Pressable onPress={() => navigation.navigate("ViewProfile")}>
                    <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                      @peaches
                    </Text>
                  </Pressable>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "500",
                      color: "#41DDFF",
                    }}
                  >
                    #Podcast #Peachy Thurdays
                  </Text>
                </View>
              </View>

              <Text
                style={{
                  top: -17,
                  fontWeight: "400",
                  fontSize: 13,
                  color: "#9F9F9F",
                  marginRight: 3,
                }}
              >
                09/03/2024
              </Text>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Image
                style={{
                  resizeMode: "contain",
                  width: 300,
                  height: 280,
                  marginTop: 10,
                }}
                source={require("../assets/post.jpg")}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                gap: 10,
                marginVertical: 10,
                marginBottom: 5,
              }}
            >
              <Pressable
                onPress={handlePresentModal}
                style={{ flexDirection: "row", gap: 6, alignItems: "center" }}
              >
                <FontAwesome name="commenting" size={22} color="#9B0E10" />
                <Text style={{ fontSize: 13, fontWeight: "400" }}>
                  Comments
                </Text>
              </Pressable>
              {liked ? (
                <Pressable
                  onPress={() => setLiked(!liked)}
                  style={{ flexDirection: "row", gap: 6, alignItems: "center" }}
                >
                  <AntDesign name="star" size={20} color="#9B0E10" />
                  <Text style={{ fontSize: 13, fontWeight: "400" }}>60</Text>
                </Pressable>
              ) : (
                <Pressable
                  onPress={() => setLiked(!liked)}
                  style={{ flexDirection: "row", gap: 6, alignItems: "center" }}
                >
                  <AntDesign name="staro" size={20} color="#9B0E10" />
                  <Text style={{ fontSize: 13, fontWeight: "400" }}>60</Text>
                </Pressable>
              )}

              <Pressable onPress={onShare}>
                <Feather name="share-2" size={20} color="black" />
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </View>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        backgroundStyle={{
          backgroundColor: "white",
          borderRadius: 30,
          flex: 1,
        }}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1, justifyContent: "space-between" }}
        >
          <View
            style={{
              flex: 1,
              alignContent: "flex-end",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: 5,
                paddingRight: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "bold",
                  marginHorizontal: 8,
                  marginBottom: 20,
                }}
              >
                Comments
              </Text>
              <Pressable onPress={handleCloseModal}>
                <FontAwesome5 name="times" size={18} color="#9F9F9F" />
              </Pressable>
            </View>

            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ flex: 1 }}
            >
              {comment.map((item, index) => (
                <View
                  key={index}
                  style={{
                    flexDirection: "row",
                    gap: 6,
                    alignItems: "center",
                    marginHorizontal: 8,
                    marginVertical: 6,
                  }}
                >
                  <Image
                    source={require("../assets/profile.jpeg")}
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 15,
                    }}
                  />
                  <View>
                    <Text
                      style={{
                        fontWeight: "bold",
                        color: "#41DDFF",
                        fontSize: 15,
                      }}
                    >
                      @Karabo
                    </Text>
                    <Text
                      style={{
                        fontWeight: "300",
                        fontSize: 12,
                        color: "#9F9F9F",
                      }}
                    >
                      This one of the best inspiring post.
                    </Text>
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderWidth: 2,
              justifyContent: "space-between",
              marginBottom: 30,
              borderRadius: 4,
              marginHorizontal: 8,
              borderColor: "#9F9F9F",
              padding: 3,
              marginHorizontal: 6,
            }}
          >
            <Ionicons name="camera-outline" size={22} color="black" />
            <TextInput
              placeholder="add a new comment"
              style={{ flex: 1, marginLeft: 6 }}
            />
            <Pressable
              style={{
                width: 30,
                height: 30,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#9B0E10",
                borderRadius: 15,
              }}
            >
              <FontAwesome name="send" size={17} color="white" />
            </Pressable>
          </KeyboardAvoidingView>
        </KeyboardAvoidingView>
      </BottomSheetModal>
    </>
  );
};

export default FeedScreen;
