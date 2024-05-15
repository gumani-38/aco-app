import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  SafeAreaView,
  Pressable,
  ScrollView,
  View,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Entypo, FontAwesome, Ionicons } from "@expo/vector-icons";

const ViewGroupScreen = () => {
  const navigation = useNavigation();
  const [message, setMessage] = useState(new Array(10).fill(""));
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 7,
          marginBottom: 1,
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
        <Text style={{ fontSize: 17, fontWeight: "bold" }}>
          PR Managers Group
        </Text>
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
      <ScrollView showsVerticalScrollIndicator={false}>
        {message.map((item, index) => (
          <View
            key={index}
            style={{
              flex: 1,
              backgroundColor: "#9F9F9F",
              borderRadius: 4,
              alignItems: "flex-end",
              marginLeft: 20,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 6,
            }}
          >
            <Text style={{ fontSize: 13, fontWeight: "300" }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
              ipsa at, voluptatibus porro reiciendis, officiis nam animi eveniet
              optio voluptate enim hic adipisci numquam nostrum.
            </Text>
          </View>
        ))}
      </ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{
          borderColor: "#9F9F9F",
          borderWidth: 2,
          backgroundColor: "white",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: 4,
          marginVertical: 10,
          padding: 5,
          marginHorizontal: 5,
        }}
      >
        <Ionicons name="camera-outline" size={24} color="black" />
        <TextInput
          placeholder="Enter message"
          style={{ flex: 1, marginLeft: 3 }}
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
    </SafeAreaView>
  );
};

export default ViewGroupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
