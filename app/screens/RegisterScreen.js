import {
  StyleSheet,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  View,
  ScrollView,
  Platform,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import * as Animatable from "react-native-animatable";
import { Entypo, Feather } from "@expo/vector-icons";
import { SelectList } from "react-native-dropdown-select-list";
import { useNavigation } from "@react-navigation/native";
const RegisterScreen = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState("");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    description: "",
    check_textInputChange: false,
    Name_textInputChane: false,
    secureTextEntry: true,
    isValidUser: true,
    ValidUser: true,
  });
  const dataDescription = [
    { key: "1", value: "Individual" },
    { key: "2", value: "Organization" },
  ];
  const nameInputChange = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        name: val,
        Name_textInputChane: true,
        ValidUser: true,
      });
    } else {
      setData({
        ...data,
        name: val,
        Name_textInputChane: false,
        ValidUser: false,
      });
    }
  };

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

  const handlePhoneChange = (val) => {
    setData({
      ...data,
      phone: val,
    });
  };

  const handleDescriptionChange = (val) => {
    setData({
      ...data,
      description: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ padding: 10 }}>
        <Animatable.View animation="zoomIn">
          <Text style={styles.Register}>Register</Text>

          <View>
            <Text style={styles.Enteryourname}>Enter your first name</Text>
            <TextInput
              style={styles.NameBox}
              placeholder="Enter your first name"
              onChangeText={(val) => nameInputChange(val)}
            />
            {data.Name_textInputChane ? (
              <Animatable.View animation="bounceIn">
                <Feather
                  style={styles.Nameicon}
                  name="check-circle"
                  size={20}
                  color="green"
                />
              </Animatable.View>
            ) : null}
          </View>
          <View>
            <Text style={styles.Enteryourname}>Enter your last name</Text>
            <TextInput
              style={styles.NameBox}
              placeholder="Enter your last name"
              onChangeText={(val) => nameInputChange(val)}
            />
            {data.Name_textInputChane ? (
              <Animatable.View animation="bounceIn">
                <Feather
                  style={styles.Nameicon}
                  name="check-circle"
                  size={20}
                  color="green"
                />
              </Animatable.View>
            ) : null}
          </View>

          <View>
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
            <Text style={styles.Enteryourphone}>Enter your phone number</Text>
            <TextInput
              style={styles.PhoneBox}
              placeholder="Enter your phone number"
              keyboardType="phone-pad"
              onChangeText={(val) => handlePhoneChange(val)}
            />
          </View>

          <View>
            <SelectList
              data={dataDescription}
              setSelected={setSelected}
              boxStyles={{
                padding: 7,
                borderColor: "#D1D1D1",
                borderWidth: 1,
                borderRadius: 4,
                marginBottom: 6,
                marginTop: 10,
              }}
              dropdownTextStyles={{
                color: "#001138",
                fontSize: 13,
                fontWeight: "500",
              }}
              placeholder="What best describes you"
            />
          </View>

          <View>
            <Text style={styles.Enteryourpassword}>Enter your password</Text>

            <TextInput
              style={styles.PasswordBox}
              secureTextEntry={data.secureTextEntry}
              placeholder="Enter your password"
              onChangeText={(val) => handlePasswordChange(val)}
            />

            <TouchableOpacity onPress={updateSecureTextEntry}>
              <Feather
                style={styles.Passwordicon}
                name={data.secureTextEntry ? "eye-off" : "eye"}
                size={20}
                color="green"
              />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => navigation.navigate("Terms")}>
              <Text style={styles.Terms}>
                By clicking Sign Up, you agree to our Terms, Privacy Policy and
                Cookies Policy
              </Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              style={styles.RegisterButton}
              onPress={() => navigation.navigate("Setup")}
            >
              <Text style={styles.RegisterText}>Register</Text>
            </TouchableOpacity>
          </View>

          <View style={{ alignSelf: "center", marginBottom: 26 }}>
            <Text style={styles.Alreadyaccount}>Already have an account?</Text>

            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.Login}> Login</Text>
            </TouchableOpacity>
          </View>

          <View></View>
        </Animatable.View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: 10,
  },

  Register: {
    fontSize: 23,
    alignSelf: "center",
    fontWeight: "bold",
    color: "#000",
    marginTop: 30,
  },

  Enteryourname: {
    marginTop: 30,
    color: "#000",
  },

  NameBox: {
    borderWidth: 1,
    width: "100%",
    borderRadius: 4,
    marginTop: 10,
    borderColor: "#D1D1D1",
    padding: 7,
  },

  Nameicon: {
    position: "absolute",
    top: -35,
    right: 10,
  },

  Enteryouremail: {
    marginTop: 15,
    color: "#000",
  },
  Terms: {
    marginTop: 17,
    textAlign: "center",
    fontWeight: "500",
    fontSize: 12,
    color: "#9B0E10",
    marginBottom: 20,
  },

  EmailBox: {
    borderWidth: 1,
    width: "100%",
    borderRadius: 4,
    marginTop: 10,
    borderColor: "#D1D1D1",
    padding: 7,
  },

  Emailicon: {
    position: "absolute",
    top: -35,
    right: 10,
  },

  Enteryourpassword: {
    marginTop: 15,
    color: "#000",
  },

  PasswordBox: {
    borderWidth: 1,
    width: "100%",
    borderRadius: 4,
    marginTop: 10,
    borderColor: "#D1D1D1",
    padding: 7,
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

  RegisterButton: {
    borderRadius: 4,
    marginTop: 15,
    backgroundColor: "#8b0016",
    padding: 8,
  },

  RegisterText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    alignSelf: "center",
  },

  Alreadyaccount: {
    marginTop: 20,
    color: "#000",
  },

  Login: {
    marginTop: -18,
    marginLeft: 165,
    color: "#00bfff",
    fontWeight: "bold",
  },

  Enteryourdescription: {
    marginTop: 15,
    color: "#000",
  },

  DescriptionBox: {
    borderWidth: 1,
    width: "100%",
    borderRadius: 10,
    marginTop: 10,
    borderColor: "#D1D1D1",
    paddingLeft: 10,
    height: 50,
  },

  Descriptionicon: {
    position: "absolute",
    top: -35,
    right: 10,
  },

  Enteryourphone: {
    marginTop: 20,
    color: "#000",
  },

  PhoneBox: {
    borderWidth: 1,
    width: "100%",
    borderRadius: 4,
    marginTop: 10,
    borderColor: "#D1D1D1",
    padding: 7,
  },

  Phoneicon: {
    position: "absolute",
    top: -35,
    right: 10,
  },
});
