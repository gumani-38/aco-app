import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Platform,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import { Entypo, Feather, Ionicons } from "@expo/vector-icons";

const ForgotScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = useState({
    email: "",
    check_textInputChange: false,
    isValidUser: true,
  });

  const textInputChange = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animatable.View animation="zoomIn">
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 60,
            marginTop: 20,
            marginBottom: 80,
          }}
        >
          <View>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Ionicons
                style={styles.backArrow}
                name="chevron-back"
                size={30}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.forgotText}>Forgot Password</Text>
        </View>

        <View>
          <Text style={styles.enterYourEmail}>Enter your email</Text>

          <TextInput
            style={styles.emailBox}
            placeholder="Enter your email"
            keyboardType="email-address"
            onChangeText={(val) => textInputChange(val)}
          />

          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather
                style={styles.emailIcon}
                name="check-circle"
                size={20}
                color="green"
              />
            </Animatable.View>
          ) : null}
        </View>

        <View>
          <TouchableOpacity
            style={styles.LoginButton}
            onPress={() => navigation.navigate("ForgotVerify")}
          >
            <Text style={styles.LoginText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </SafeAreaView>
  );
};

export default ForgotScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: 10,
  },

  forgotText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#000",
  },

  backArrow: {
    fontSize: 30,
    color: "#9B0E10",
  },

  forgotPassword: {
    fontSize: 20,
    alignSelf: "center",
    fontWeight: "bold",
    marginTop: 20,
    color: "#000",
  },

  dontWorry: {
    textAlign: "center",
    color: "#000",
    marginTop: 5,
  },

  enterYourEmail: {
    color: "#000",
    marginTop: 50,
  },

  emailBox: {
    borderWidth: 1,
    width: "100%",
    borderRadius: 4,
    marginTop: 10,
    borderColor: "#D1D1D1",
    padding: 8,
  },

  emailIcon: {
    position: "absolute",
    top: -35,
    right: 10,
  },

  LoginButton: {
    width: "100%",
    borderRadius: 4,
    marginTop: 30,
    backgroundColor: "#8b0016",
    padding: 9,
  },

  LoginText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    alignSelf: "center",
  },
});
