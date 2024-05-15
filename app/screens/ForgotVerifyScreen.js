import {
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
import React, { useRef, useState } from "react";
import { Entypo, Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ForgotVerifyScreen = () => {
  const navigation = useNavigation();
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const inputs = useRef([]);

  const handleChange = (text, index) => {
    if (isNaN(text)) return false;

    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Focus next input or previous input if deleting a value
    if (text !== "") {
      if (index < otp.length - 1) {
        inputs.current[index + 1].focus();
      }
    } else {
      if (index > 0) {
        inputs.current[index - 1].focus();
      }
    }
    // Change border color
    if (text !== "") {
      inputs.current[index].setNativeProps({
        style: { borderColor: "#9B0E10" },
      });
    } else {
      inputs.current[index].setNativeProps({
        style: { borderColor: "#9F9F9F" },
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 60,
            marginTop: 20,
            marginBottom: 60,
          }}
        >
          <View>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Ionicons
                style={{ color: "#9B0E10" }}
                name="chevron-back"
                size={30}
              />
            </TouchableOpacity>
          </View>
          <Text style={{ fontSize: 19, fontWeight: "bold" }}>
            Forgot Password OTP
          </Text>
        </View>

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1, padding: 10 }}
        >
          <View style={{ marginTop: 30 }}>
            <View style={{ alignSelf: "center" }}>
              <Ionicons name="shield-checkmark" size={80} color="#9B0E10" />
            </View>
            <Text
              style={{ textAlign: "center", fontWeight: "bold", fontSize: 19 }}
            >
              Verify Account
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "400",
                fontSize: 15,
                color: "#9F9F9F",
              }}
            >
              Enter code received on your email: karabo27@gmail.com
            </Text>
          </View>
          <View
            style={{
              width: "100%",
              paddingHorizontal: 22,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            {otp.map((data, index) => {
              return (
                <TextInput
                  ref={(input) => inputs.current.push(input)}
                  style={{
                    width: 50,
                    height: 50,
                    borderWidth: 1,
                    borderColor: "#9F9F9F",
                    marginHorizontal: 7,
                    borderRadius: 3,
                    textAlign: "center",
                  }}
                  key={index}
                  keyboardType="number-pad"
                  onChangeText={(text) => handleChange(text, index)}
                  maxLength={1}
                />
              );
            })}
          </View>
          <View style={{ alignItems: "center", marginTop: 10 }}>
            <Pressable>
              <Text
                style={{ color: "#41DDFF", fontSize: 17, fontWeight: "500" }}
              >
                Resend Code
              </Text>
            </Pressable>
          </View>
          <Pressable
            style={{
              backgroundColor: "#9B0E10",
              padding: 8,
              borderRadius: 4,
              marginTop: 15,
            }}
            onPress={() => navigation.navigate("Login")}
          >
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 19,
                color: "white",
              }}
            >
              Verify
            </Text>
          </Pressable>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgotVerifyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
