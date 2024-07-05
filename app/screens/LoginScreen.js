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
import React, { useContext, useEffect, useState } from "react";
import * as Animatable from "react-native-animatable";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { supabase } from "../utils/supabase";
import ProgressBar from "../components/ProgressBar";
import SuccessAlert from "../components/SuccessAlert";
const LoginScreen = () => {
  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [userId, setUserId] = useState("");
  const [data, setData] = useState({
    email: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
  });
  useEffect(() => {
    getUser();
  }, []);
  const getUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    setUserId(user.id);
  };
  if (userId) {
    navigation.replace("Main");
    return;
  }
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

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };
  const handleLoginClick = async () => {
    const { email, password } = data;
    if (!email && !password) {
      return;
    }

    setLoading(true);

    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 1) {
          clearInterval(progressInterval);
          return 1;
        }
        return prevProgress + 0.1;
      });
    }, 100);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) {
        setLoading(false);
        setProgress(0);
        throw error;
      }
      setTimeout(() => {
        setLoading(false);
        setProgress(0);
        setShowSuccess(true);
        setTimeout(() => {
          navigation.navigate("Main");
          setShowSuccess(false);
        }, 300);
      }, 2000);
    } catch (error) {
      console.error("Error logging in:", error.message);
    }
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ padding: 10 }}
        >
          <Animatable.View style={{ marginTop: 20 }}>
            <View style={{ alignItems: "center" }}>
              <Image
                source={require("../assets/aco-logo.png")}
                style={{ width: 150, height: 150, resizeMode: "contain" }}
              />
            </View>

            <View>
              <Text style={styles.loginText}>Login</Text>
              <Text style={styles.Enteryouremail}>Enter your email</Text>

              <TextInput
                style={styles.EmailBox}
                placeholder="Enter your email"
                keyboardType="email-address"
                onChangeText={(val) => textInputChange(val)}
              />

              {data.check_textInputChange ? (
                <Animatable.View animation="bounceIn">
                  <Feather
                    style={styles.Emailicon}
                    name="check-circle"
                    size={20}
                    color="green"
                  />
                </Animatable.View>
              ) : null}
            </View>

            <View>
              <Text style={styles.Enteryourpassword}>Enter your password</Text>

              <TextInput
                style={styles.PasswordBox}
                secureTextEntry={data.secureTextEntry}
                placeholder="Enter your password"
                onChangeText={(val) => handlePasswordChange(val)}
              />

              <Pressable onPress={updateSecureTextEntry}>
                <Feather
                  style={styles.Passwordicon}
                  name={data.secureTextEntry ? "eye-off" : "eye"}
                  size={20}
                  color="gray"
                />
              </Pressable>
            </View>

            <Pressable onPress={() => navigation.navigate("Forgot")}>
              <Text style={styles.Forgotpassword}>Forgot Password?</Text>
            </Pressable>

            <View>
              <Pressable style={styles.LoginButton} onPress={handleLoginClick}>
                <Text style={styles.LoginText}>Login</Text>
              </Pressable>
            </View>

            <View style={{ alignSelf: "center" }}>
              <Text style={styles.Dontaccount}>Don't have an account? </Text>

              <Pressable onPress={() => navigation.navigate("Register")}>
                <Text style={styles.Signup}> Signup</Text>
              </Pressable>
            </View>
          </Animatable.View>
        </ScrollView>
      </SafeAreaView>
      {loading && <ProgressBar process={progress} />}
      {showSuccess && <SuccessAlert />}
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  loginText: {
    fontSize: 23,
    alignSelf: "center",
    fontWeight: "bold",
    color: "#000",
    marginTop: 10,
  },

  Enteryouremail: {
    marginTop: 15,
    color: "#000",
  },

  EmailBox: {
    borderWidth: 1,
    width: "100%",
    borderRadius: 4,
    marginTop: 10,
    borderColor: "#D1D1D1",
    padding: 8,
  },

  Emailicon: {
    position: "absolute",
    top: -35,
    right: 10,
  },

  Enteryourpassword: {
    marginTop: 20,
    color: "#000",
  },

  PasswordBox: {
    borderWidth: 1,
    width: "100%",
    borderRadius: 4,
    marginTop: 10,
    borderColor: "#D1D1D1",
    padding: 8,
  },

  Passwordicon: {
    position: "absolute",
    top: -35,
    right: 10,
  },

  Forgotpassword: {
    fontWeight: "bold",
    alignSelf: "flex-end",
    marginTop: 10,
    color: "#000",
  },

  LoginButton: {
    borderRadius: 4,
    marginTop: 20,
    backgroundColor: "#9B0E10",
    padding: 8,
  },

  LoginText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    alignSelf: "center",
  },

  Dontaccount: {
    marginTop: 20,
    color: "#000",
  },

  Signup: {
    marginTop: -18,
    marginLeft: 145,
    color: "#00bfff",
    fontWeight: "bold",
  },

  Terms: {
    marginTop: 10,
    textAlign: "center",
    fontWeight: "500",
    fontSize: 12,
    marginBottom: 20,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  CheckBox: {
    marginTop: 50,
    marginLeft: 55,
  },
});
