import { useNavigation, useRoute } from "@react-navigation/native";
import {
  Image,
  Platform,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { supabase } from "../utils/supabase";
import { useState } from "react";
import { Feather, MaterialIcons } from "@expo/vector-icons";

const VerifyAccountScreen = () => {
  const navigation = useNavigation();
  const { email, password } = useRoute().params;
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const logInUser = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      if (error) {
        setError(true);
        return;
      }
      setError(false);
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
      setTimeout(() => {
        setLoading(false);
        setProgress(0);
        setShowSuccess(true);
        setTimeout(() => {
          navigation.navigate("Setup");
          setShowSuccess(false);
        }, 300);
      }, 2000);
    } catch (error) {
      console.log("error logging user:", error);
    }
  };
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <View style={{ alignItems: "center" }}>
            <Image
              source={require("../assets/aco-logo.png")}
              style={{ width: 150, height: 150, resizeMode: "contain" }}
            />
          </View>
          {error && (
            <View
              style={{
                backgroundColor: "red",
                padding: 4,
                borderRadius: 3,
                flexDirection: "row",
                width: 280,
                color: "white",
                alignItems: "center",
              }}
            >
              <MaterialIcons name="cancel" size={20} color="white" />
              <Text style={{ color: "white", fontSize: 13, marginLeft: 3 }}>
                Account not verified
              </Text>
            </View>
          )}
          <View style={{ marginTop: 20 }}>
            <Text
              style={{
                color: "#9F9F9F",
                fontSize: 14,
                textAlign: "center",
                fontWeight: "bold",
                marginBottom: 5,
              }}
            >
              Account verification
            </Text>
            <Text
              style={{ color: "#D1D1D1", fontSize: 14, textAlign: "center" }}
            >
              Sent to: {email}
            </Text>
          </View>
          <Pressable
            style={{
              backgroundColor: "#9B0E10",
              borderRadius: 3,
              padding: 8,
              width: 280,
              marginVertical: 30,
            }}
            onPress={logInUser}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 15,
                textAlign: "center",
              }}
            >
              Continue
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
      {loading && <ProgressBar process={progress} />}
      {showSuccess && <SuccessAlert />}
    </>
  );
};

export default VerifyAccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#001138",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
