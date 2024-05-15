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
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import {
  FontAwesome,
  Feather,
  FontAwesome5,
  EvilIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [image, setImage] = useState(null);
  const bottomSheetModalRef = useRef(null);
  const bioBottomSheetModalRef = useRef(null);
  const [edtBio, setEdtBio] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);
  const snapPoints = ["45%"];
  const bioSnapPoints = ["45%"];

  function handlePresentModal() {
    bottomSheetModalRef.current?.present();
  }
  function handleCloseModal() {
    bottomSheetModalRef.current?.close();
  }
  function handleBioPresentModal() {
    bioBottomSheetModalRef.current?.present();
  }
  function handleBioCloseModal() {
    bioBottomSheetModalRef.current?.close();
  }
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <ScrollView
            style={{ padding: 7 }}
            showsVerticalScrollIndicator={false}
          >
            <Pressable onPress={() => navigation.navigate("AddGroup")}>
              <View style={{ marginVertical: 10, alignItems: "flex-end" }}>
                <View
                  style={{
                    backgroundColor: "#9B0E10",
                    width: 32,
                    height: 32,
                    borderRadius: 16,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MaterialIcons name="group-add" size={22} color="white" />
                </View>
              </View>
            </Pressable>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 20,
              }}
            >
              <View style={{ position: "relative" }}>
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
              <View>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: "bold",
                    textAlign: "center",
                    marginVertical: 3,
                  }}
                >
                  Karabo Mashitela
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "500",
                    color: "#41DDFF",
                    textAlign: "center",
                  }}
                >
                  @Peachys
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: "600",
                    color: "#9F9F9F",
                    textAlign: "center",
                  }}
                >
                  Gender: Female
                </Text>
              </View>
            </View>

            <View style={{ marginTop: 15 }}>
              <Pressable
                onPress={handleBioPresentModal}
                style={{
                  flex: 1,
                  backgroundColor: "white",
                  padding: 17,
                  borderRadius: 5,
                  marginBottom: 15,
                }}
              >
                <View>
                  <Text style={{ fontSize: 15, fontWeight: "bold" }}>Bio</Text>
                </View>
              </Pressable>

              <View
                style={{
                  flex: 1,
                  backgroundColor: "white",
                  padding: 17,
                  borderRadius: 5,
                  marginBottom: 15,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                    Date of Birth -
                  </Text>
                  <Text style={{ fontSize: 13, color: "#9F9F9F" }}>
                    09/11/2000
                  </Text>
                </View>
              </View>

              <View
                style={{
                  flex: 1,
                  backgroundColor: "white",
                  padding: 17,
                  borderRadius: 5,
                  marginBottom: 15,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                    Email -
                  </Text>
                  <Text style={{ fontSize: 13, color: "#9F9F9F" }}>
                    karaboMashitela@gmail.com
                  </Text>
                </View>
              </View>

              <View
                style={{
                  flex: 1,
                  backgroundColor: "white",
                  padding: 17,
                  borderRadius: 5,
                  marginBottom: 15,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                    Location -
                  </Text>
                  <Text style={{ fontSize: 13, color: "#9F9F9F" }}>
                    Pretoria
                  </Text>
                </View>
              </View>

              <View
                style={{
                  flex: 1,
                  backgroundColor: "white",
                  padding: 17,
                  borderRadius: 5,
                  marginBottom: 15,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 15,
                  }}
                >
                  <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                    Password -
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 9,
                    }}
                  >
                    <Text style={{ fontSize: 13, color: "#9F9F9F" }}>
                      **********
                    </Text>
                    <Pressable onPress={handlePresentModal}>
                      <Feather
                        style={{ top: -3 }}
                        name="edit"
                        size={15}
                        color="#9B0E10"
                      />
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
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
        <ScrollView showsVerticalScrollIndicator={false}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
          >
            <View
              style={{
                marginHorizontal: 8,
                marginBottom: 15,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>Password</Text>
              <Pressable onPress={handleCloseModal}>
                <FontAwesome5 name="times" size={18} color="#9F9F9F" />
              </Pressable>
            </View>
            {hidePassword ? (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 6,
                  borderWidth: 2,
                  borderRadius: 6,
                  borderColor: "#9F9F9F",
                  marginHorizontal: 8,
                  marginBottom: 15,
                }}
              >
                <TextInput
                  placeholder="***********"
                  style={{ flex: 1 }}
                  secureTextEntry
                />
                <Pressable onPress={() => setHidePassword(!hidePassword)}>
                  <Feather name="eye-off" size={22} color="black" />
                </Pressable>
              </View>
            ) : (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 6,
                  borderWidth: 2,
                  borderRadius: 6,
                  borderColor: "#9F9F9F",
                  marginHorizontal: 8,
                  marginBottom: 15,
                }}
              >
                <TextInput placeholder="***********" style={{ flex: 1 }} />
                <Pressable onPress={() => setHidePassword(!hidePassword)}>
                  <Feather name="eye" size={22} color="black" />
                </Pressable>
              </View>
            )}
            <View>
              <Pressable
                style={{
                  backgroundColor: "#9B0E10",
                  borderRadius: 4,
                  marginHorizontal: 8,
                  padding: 12,
                  marginBottom: 8,
                  marginTop: 26,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: 16,
                    color: "white",
                  }}
                >
                  Update
                </Text>
              </Pressable>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </BottomSheetModal>
      <BottomSheetModal
        ref={bioBottomSheetModalRef}
        index={0}
        snapPoints={bioSnapPoints}
        backgroundStyle={{
          backgroundColor: "#fff",
          borderRadius: 30,
          padding: 10,
          shadowColor: "#fff",
          shadowRadius: 10,
        }}
      >
        <View
          style={{
            marginTop: 5,
            marginBottom: 7,
            flex: 1,
            alignSelf: "flex-end",
            marginHorizontal: 10,
          }}
        >
          <Pressable onPress={handleBioCloseModal}>
            <FontAwesome5 name="times" size={18} color="#9F9F9F" />
          </Pressable>
        </View>
        <View
          style={{
            marginHorizontal: 8,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>Bio</Text>
          {edtBio ? (
            <Pressable onPress={() => setEdtBio(!edtBio)}>
              <MaterialIcons name="cancel" size={22} color="red" />
            </Pressable>
          ) : (
            <Pressable onPress={() => setEdtBio(!edtBio)}>
              <EvilIcons name="pencil" size={22} color="#9B0E10" />
            </Pressable>
          )}
        </View>
        <ScrollView>
          <View style={{ marginHorizontal: 8, marginTop: 10 }}>
            {edtBio ? (
              <View>
                <TextInput
                  defaultValue="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
                ipsa at, voluptatibus porro reiciendis, officiis nam animi eveniet
                rem alias quidem, voluptate ex provident! Sunt earum ducimus iusto
                non, reiciendis similique neque laborum. Cum repellat sunt
                asperiores impedit officiis, accusantium deleniti dicta corporis
                optio voluptate enim hic adipisci numquam nostrum."
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
                  editable
                  placeholderTextColor={"#9F9F9F"}
                />
                <Pressable
                  style={{
                    backgroundColor: "#9B0E10",
                    borderRadius: 4,
                    padding: 10,
                    marginBottom: 20,
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
                    Update
                  </Text>
                </Pressable>
              </View>
            ) : (
              <Text style={{ color: "#9F9F9F", fontSize: 14 }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Placeat ipsa at, voluptatibus porro reiciendis, officiis nam
                animi eveniet rem alias quidem, voluptate ex provident! Sunt
                earum ducimus iusto non, reiciendis similique neque laborum. Cum
                repellat sunt asperiores impedit officiis, accusantium deleniti
                dicta corporis optio voluptate enim hic adipisci numquam
                nostrum.
              </Text>
            )}
          </View>
        </ScrollView>
      </BottomSheetModal>
    </>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
