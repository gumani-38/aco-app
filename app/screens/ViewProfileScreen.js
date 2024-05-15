import {
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Dimensions,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import { Image } from "react-native";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import { LineChart } from "react-native-gifted-charts";
import {
  Entypo,
  FontAwesome,
  FontAwesome5,
  AntDesign,
} from "@expo/vector-icons";

const ViewProfileScreen = () => {
  const bottomSheetModalRef = useRef(null);
  const navigation = useNavigation();
  const commentBottomSheetModalRef = useRef(null);
  const [liked, setLiked] = useState(false);
  const commentSnapPoints = ["45%", "90%", "100%"];
  const [selectedTab, setSelectedTab] = useState("about");
  const snapPoints = ["50%"];

  function handlePresentModal() {
    bottomSheetModalRef.current?.present();
  }
  function handleCloseModal() {
    bottomSheetModalRef.current?.close();
  }
  const data = [
    { value: 15, label: "Jan" },
    { value: 30, label: "Feb" },
    { value: 23, label: "Mar" },
    { value: 40, label: "Arp" },
    { value: 16, label: "May" },
    { value: 40, label: "Jun" },
  ];
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
                width: 40,
                height: 40,
                borderRadius: 20,
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
        <ScrollView style={{ padding: 7 }} showsVerticalScrollIndicator={false}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <View style={{ position: "relative" }}>
              <Image
                source={require("../assets/profile.jpeg")}
                style={{
                  position: "relative",
                  padding: 10,
                  width: 100,
                  height: 100,
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 3,
                  resizeMode: "cover",
                  borderRadius: 50,
                  borderColor: "#9F9F9F",
                }}
              />
            </View>
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>@Peachys</Text>
            <Text style={{ fontSize: 14, color: "#9F9F9F", fontWeight: "400" }}>
              Karabo Mashimela
            </Text>
            <View style={{ flexDirection: "row", gap: 8, marginVertical: 7 }}>
              <Pressable
                style={{
                  backgroundColor: "#001138",
                  borderRadius: 4,
                  paddingHorizontal: 10,
                  paddingVertical: 4,
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  Follow
                </Text>
              </Pressable>
              <Pressable
                onPress={handlePresentModal}
                style={{
                  backgroundColor: "#9B0E10",
                  borderRadius: 4,
                  paddingHorizontal: 10,
                  paddingVertical: 4,
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  Book Me
                </Text>
              </Pressable>
            </View>

            <View style={{ flexDirection: "row", gap: 25 }}>
              <Pressable onPress={() => setSelectedTab("about")}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    color: selectedTab === "about" ? "#9B0E10" : "#9F9F9F",
                  }}
                >
                  About
                </Text>
              </Pressable>
              <Pressable onPress={() => setSelectedTab("myjourney")}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    color: selectedTab === "myjourney" ? "#9B0E10" : "#9F9F9F",
                  }}
                >
                  My Journey
                </Text>
              </Pressable>
              <Pressable onPress={() => setSelectedTab("impression")}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    color: selectedTab === "impression" ? "#9B0E10" : "#9F9F9F",
                  }}
                >
                  Impressions
                </Text>
              </Pressable>
            </View>
          </View>
          {selectedTab === "about" ? (
            <View style={{ marginTop: 10 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottomWidth: 2,
                  borderColor: "#9F9F9F",
                  paddingVertical: 8,
                  paddingHorizontal: 8,
                  marginHorizontal: 2,
                  marginVertical: 10,
                }}
              >
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                  Profession:
                </Text>
                <Text
                  style={{ fontSize: 14, fontWeight: "500", color: "#001138" }}
                >
                  Artist
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottomWidth: 2,
                  borderColor: "#9F9F9F",
                  paddingVertical: 8,
                  paddingHorizontal: 8,
                  marginHorizontal: 2,
                  marginVertical: 10,
                }}
              >
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                  Location:
                </Text>
                <Text
                  style={{ fontSize: 14, fontWeight: "500", color: "#001138" }}
                >
                  Pretoria
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottomWidth: 2,
                  borderColor: "#9F9F9F",
                  paddingVertical: 8,
                  paddingHorizontal: 8,
                  marginHorizontal: 2,
                  marginVertical: 10,
                }}
              >
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                  Gender:
                </Text>
                <Text
                  style={{ fontSize: 14, fontWeight: "500", color: "#001138" }}
                >
                  Female
                </Text>
              </View>

              <View
                style={{
                  borderBottomWidth: 2,
                  borderColor: "#9F9F9F",
                  paddingVertical: 8,
                  paddingHorizontal: 8,
                  marginHorizontal: 2,
                  marginVertical: 10,
                }}
              >
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>Bio:</Text>
                <Text
                  style={{ fontSize: 14, fontWeight: "500", color: "#001138" }}
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Placeat ipsa at, voluptatibus porro reiciendis, officiis nam
                  animi eveniet rem alias quidem, voluptate ex provident! Sunt
                  earum ducimus iusto non, reiciendis similique neque laborum.
                  Cum repellat sunt asperiores impedit officiis,
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottomWidth: 2,
                  borderColor: "#9F9F9F",
                  paddingVertical: 8,
                  paddingHorizontal: 8,
                  marginHorizontal: 2,
                  marginVertical: 10,
                }}
              >
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                  Date of Birth:
                </Text>
                <Text
                  style={{ fontSize: 14, fontWeight: "500", color: "#001138" }}
                >
                  Dec,2,1994
                </Text>
              </View>
            </View>
          ) : selectedTab === "myjourney" ? (
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ marginTop: 20 }}
            >
              <View
                style={{
                  backgroundColor: "white",
                  padding: 4,
                  marginHorizontal: 2,
                  marginVertical: 10,
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
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 5,
                    }}
                  >
                    <Image
                      style={{ width: 40, height: 40, borderRadius: 20 }}
                      source={require("../assets/profile.jpeg")}
                    />
                    <View>
                      <Pressable
                        onPress={() => navigation.navigate("ViewProfile")}
                      >
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
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
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
                    style={{
                      flexDirection: "row",
                      gap: 6,
                      alignItems: "center",
                    }}
                  >
                    <FontAwesome name="commenting" size={22} color="#9B0E10" />
                    <Text style={{ fontSize: 13, fontWeight: "400" }}>
                      Comments
                    </Text>
                  </Pressable>
                  {liked ? (
                    <Pressable
                      onPress={() => setLiked(!liked)}
                      style={{
                        flexDirection: "row",
                        gap: 6,
                        alignItems: "center",
                      }}
                    >
                      <AntDesign name="star" size={20} color="#9B0E10" />
                      <Text style={{ fontSize: 13, fontWeight: "400" }}>
                        60
                      </Text>
                    </Pressable>
                  ) : (
                    <Pressable
                      onPress={() => setLiked(!liked)}
                      style={{
                        flexDirection: "row",
                        gap: 6,
                        alignItems: "center",
                      }}
                    >
                      <AntDesign name="staro" size={20} color="#9B0E10" />
                      <Text style={{ fontSize: 13, fontWeight: "400" }}>
                        60
                      </Text>
                    </Pressable>
                  )}

                  <Pressable>
                    <FontAwesome
                      name="share-square-o"
                      size={22}
                      color="#9B0E10"
                    />
                  </Pressable>
                </View>
              </View>
            </ScrollView>
          ) : selectedTab === "impression" ? (
            <View
              style={{
                backgroundColor: "white",
                marginHorizontal: 5,
                marginTop: 20,
                padding: 7,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 17,
                  color: "#9F9F9F",
                  textAlign: "right",
                  marginHorizontal: 10,
                  marginBottom: 9,
                }}
              >
                2024
              </Text>
              <LineChart data={data} />
            </View>
          ) : (
            <View>
              <Text></Text>
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        backgroundStyle={{
          backgroundColor: "white",
          borderRadius: 30,
          shadowColor: "#171717",
          shadowOffset: { width: -2, height: 4 },
          shadowOpacity: 0.2,
          shadowRadius: 3,
          padding: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: 10,
            paddingRight: 20,
          }}
        >
          <Pressable onPress={handleCloseModal}>
            <FontAwesome5 name="times" size={20} color="#9F9F9F" />
          </Pressable>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ paddingHorizontal: 9 }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 20,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Book me:</Text>
            <Text style={{ fontSize: 15, fontWeight: "500", color: "#9F9F9F" }}>
              @peachys
            </Text>
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
              placeholder="enter your message..."
              multiline={true}
              editable
              placeholderTextColor={"#9F9F9F"}
            />
          </View>
          <Pressable
            style={{ backgroundColor: "#9B0E10", borderRadius: 4, padding: 10 }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontSize: 19,
                fontWeight: "bold",
              }}
            >
              Send Message
            </Text>
          </Pressable>
        </ScrollView>
      </BottomSheetModal>
    </>
  );
};

export default ViewProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
