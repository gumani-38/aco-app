import {
  Image,
  Platform,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const SearchScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 7,
          marginBottom: 40,
          marginTop: 18,
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
            <Entypo name="chevron-left" size={32} color="white" />
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

      <View style={{ padding: 4 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 3,
            borderRadius: 4,
            borderColor: "#9F9F9F",
            padding: 2,
            backgroundColor: "#fff",
          }}
        >
          <TextInput style={{ flex: 1 }} placeholder="Search a profile..." />
          <View
            style={{
              backgroundColor: "#9B0E10",
              width: 36,
              height: 36,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 18,
            }}
          >
            <FontAwesome name="search" size={21} color="white" />
          </View>
        </View>
      </View>
      <View>
        <Text
          style={{
            textAlign: "center",
            marginTop: 20,
            fontSize: 18,
            marginBottom: 7,
          }}
        >
          Profile results...
        </Text>
      </View>
      <ScrollView style={{ padding: 7 }} showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#fff",
            padding: 4,
            marginBottom: 10,
            borderRadius: 6,
          }}
        >
          <View style={{ flexDirection: "row", gap: 7 }}>
            <Image
              source={require("../assets/profile.jpeg")}
              style={{
                width: 50,
                height: 50,
                resizeMode: "cover",
                borderRadius: 25,
              }}
            />
            <View style={{}}>
              <Text
                style={{
                  color: "#41DDFF",
                  fontSize: 18,
                  fontWeight: "bold",
                  top: -4,
                }}
              >
                @Peachys
              </Text>
              <Text
                style={{
                  fontWeight: "400",
                  color: "#9F9F9F",
                  fontSize: 15,
                }}
              >
                Karabo Mashabela
              </Text>
            </View>
          </View>
          <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Entypo name="location-pin" size={18} color="#9B0E10" />
              <Text style={{ color: "#9F9F9F", fontWeight: "500" }}>
                Pretoria
              </Text>
            </View>
            <View style={{ marginTop: 15 }}>
              <Pressable
                style={{
                  backgroundColor: "#9B0E10",
                  borderRadius: 4,
                  padding: 3,
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "600",
                    fontSize: 13,
                    textAlign: "center",
                  }}
                >
                  Follow
                </Text>
              </Pressable>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#fff",
            padding: 4,
            marginBottom: 10,
            borderRadius: 6,
          }}
        >
          <View style={{ flexDirection: "row", gap: 7 }}>
            <Image
              source={require("../assets/profile.jpeg")}
              style={{
                width: 50,
                height: 50,
                resizeMode: "cover",
                borderRadius: 25,
              }}
            />
            <View style={{}}>
              <Text
                style={{
                  color: "#41DDFF",
                  fontSize: 18,
                  fontWeight: "bold",
                  top: -4,
                }}
              >
                @Peachys
              </Text>
              <Text
                style={{
                  fontWeight: "400",
                  color: "#9F9F9F",
                  fontSize: 15,
                }}
              >
                Karabo Mashabela
              </Text>
            </View>
          </View>
          <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Entypo name="location-pin" size={18} color="#9B0E10" />
              <Text style={{ color: "#9F9F9F", fontWeight: "500" }}>
                Pretoria
              </Text>
            </View>
            <View style={{ marginTop: 15 }}>
              <Pressable
                style={{
                  backgroundColor: "#9B0E10",
                  borderRadius: 4,
                  padding: 3,
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "600",
                    fontSize: 13,
                    textAlign: "center",
                  }}
                >
                  Follow
                </Text>
              </Pressable>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#fff",
            padding: 4,
            marginBottom: 10,
            borderRadius: 6,
          }}
        >
          <View style={{ flexDirection: "row", gap: 7 }}>
            <Image
              source={require("../assets/profile.jpeg")}
              style={{
                width: 50,
                height: 50,
                resizeMode: "cover",
                borderRadius: 25,
              }}
            />
            <View style={{}}>
              <Text
                style={{
                  color: "#41DDFF",
                  fontSize: 18,
                  fontWeight: "bold",
                  top: -4,
                }}
              >
                @Peachys
              </Text>
              <Text
                style={{
                  fontWeight: "400",
                  color: "#9F9F9F",
                  fontSize: 15,
                }}
              >
                Karabo Mashabela
              </Text>
            </View>
          </View>
          <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Entypo name="location-pin" size={18} color="#9B0E10" />
              <Text style={{ color: "#9F9F9F", fontWeight: "500" }}>
                Pretoria
              </Text>
            </View>
            <View style={{ marginTop: 15 }}>
              <Pressable
                style={{
                  backgroundColor: "#9B0E10",
                  borderRadius: 4,
                  padding: 3,
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "600",
                    fontSize: 13,
                    textAlign: "center",
                  }}
                >
                  Follow
                </Text>
              </Pressable>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#fff",
            padding: 4,
            marginBottom: 10,
            borderRadius: 6,
          }}
        >
          <View style={{ flexDirection: "row", gap: 7 }}>
            <Image
              source={require("../assets/profile.jpeg")}
              style={{
                width: 50,
                height: 50,
                resizeMode: "cover",
                borderRadius: 25,
              }}
            />
            <View style={{}}>
              <Text
                style={{
                  color: "#41DDFF",
                  fontSize: 18,
                  fontWeight: "bold",
                  top: -4,
                }}
              >
                @Peachys
              </Text>
              <Text
                style={{
                  fontWeight: "400",
                  color: "#9F9F9F",
                  fontSize: 15,
                }}
              >
                Karabo Mashabela
              </Text>
            </View>
          </View>
          <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Entypo name="location-pin" size={18} color="#9B0E10" />
              <Text style={{ color: "#9F9F9F", fontWeight: "500" }}>
                Pretoria
              </Text>
            </View>
            <View style={{ marginTop: 15 }}>
              <Pressable
                style={{
                  backgroundColor: "#9F9F9F",
                  borderRadius: 4,
                  padding: 3,
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "600",
                    fontSize: 13,
                    textAlign: "center",
                  }}
                >
                  Following
                </Text>
              </Pressable>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#fff",
            padding: 4,
            marginBottom: 10,
            borderRadius: 6,
          }}
        >
          <View style={{ flexDirection: "row", gap: 7 }}>
            <Image
              source={require("../assets/profile.jpeg")}
              style={{
                width: 50,
                height: 50,
                resizeMode: "cover",
                borderRadius: 25,
              }}
            />
            <View style={{}}>
              <Text
                style={{
                  color: "#41DDFF",
                  fontSize: 18,
                  fontWeight: "bold",
                  top: -4,
                }}
              >
                @Peachys
              </Text>
              <Text
                style={{
                  fontWeight: "400",
                  color: "#9F9F9F",
                  fontSize: 15,
                }}
              >
                Karabo Mashabela
              </Text>
            </View>
          </View>
          <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Entypo name="location-pin" size={18} color="#9B0E10" />
              <Text style={{ color: "#9F9F9F", fontWeight: "500" }}>
                Pretoria
              </Text>
            </View>
            <View style={{ marginTop: 15 }}>
              <Pressable
                style={{
                  backgroundColor: "#9B0E10",
                  borderRadius: 4,
                  padding: 3,
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "600",
                    fontSize: 13,
                    textAlign: "center",
                  }}
                >
                  Follow
                </Text>
              </Pressable>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#fff",
            padding: 4,
            marginBottom: 10,
            borderRadius: 6,
          }}
        >
          <View style={{ flexDirection: "row", gap: 7 }}>
            <Image
              source={require("../assets/profile.jpeg")}
              style={{
                width: 50,
                height: 50,
                resizeMode: "cover",
                borderRadius: 25,
              }}
            />
            <View style={{}}>
              <Text
                style={{
                  color: "#41DDFF",
                  fontSize: 18,
                  fontWeight: "bold",
                  top: -4,
                }}
              >
                @Peachys
              </Text>
              <Text
                style={{
                  fontWeight: "400",
                  color: "#9F9F9F",
                  fontSize: 15,
                }}
              >
                Karabo Mashabela
              </Text>
            </View>
          </View>
          <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Entypo name="location-pin" size={18} color="#9B0E10" />
              <Text style={{ color: "#9F9F9F", fontWeight: "500" }}>
                Pretoria
              </Text>
            </View>
            <View style={{ marginTop: 15 }}>
              <Pressable
                style={{
                  backgroundColor: "#9F9F9F",
                  borderRadius: 4,
                  padding: 3,
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "600",
                    fontSize: 13,
                    textAlign: "center",
                  }}
                >
                  Following
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
