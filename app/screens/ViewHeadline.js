import {
  Image,
  Platform,
  Pressable,
  StatusBar,
  StyleSheet,
  Dimensions,
  Text,
  SafeAreaView,
  TextInput,
  ScrollView,
  View,
  Share,
} from "react-native";
import { FontAwesome, AntDesign, Feather, Entypo } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

const ViewHeadline = () => {
  const navigation = useNavigation();
  const bottomSheetModalRef = useRef(null);
  const [liked, setLiked] = useState(false);
  const snapPoints = ["56%"];

  function handlePresentModal() {
    bottomSheetModalRef.current?.present();
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
        <ScrollView>
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
      </SafeAreaView>
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
        <View style={{ flex: 1, position: "relative" }}>
          <View
            style={{
              flex: 1,
              alignContent: "flex-end",
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
            <ScrollView showsVerticalScrollIndicator={false}>
              <View
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

              <View
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

              <View
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
            </ScrollView>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderWidth: 2,
              justifyContent: "space-between",
              marginBottom: 30,
              borderRadius: 4,
              position: "absolute",
              bottom: 0,
              marginHorizontal: 8,
              borderColor: "#9F9F9F",
              padding: 3,
              marginHorizontal: 3,
            }}
          >
            <TextInput placeholder="add a new comment" style={{ flex: 1 }} />
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
          </View>
        </View>
      </BottomSheetModal>
    </>
  );
};

export default ViewHeadline;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
