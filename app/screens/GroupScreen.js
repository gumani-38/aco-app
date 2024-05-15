import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const GroupScreen = () => {
  const navigation = useNavigation();
  const [group, setGroup] = useState(new Array(6).fill(""));
  return (
    <View style={{ padding: 5, marginTop: 15 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {group.map((item, index) => (
          <TouchableOpacity onPress={() => navigation.navigate("ViewGroup")}>
            <View
              style={{
                flex: 1,
                backgroundColor: "white",
                borderRadius: 5,
                marginBottom: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  flex: 1,
                  gap: 5,
                }}
              >
                <Image
                  style={{ width: 120, height: 120 }}
                  source={require("../assets/aco-logo.png")}
                />
                <View style={{ flex: 1 }}>
                  <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                    PR Managers
                  </Text>

                  <Text
                    numberOfLines={3}
                    style={{ fontSize: 13, fontWeight: "400" }}
                  >
                    Lorem ipsum dolor sit amet consectetur. At imperdiet
                    ultrices lectus pharetra eu. In felis vestibulum phasellus
                    nunc eu turpis eget ac.Lorem ipsum dolor sit amet
                    consectetur. At imperdiet ultrices lectus pharetra eu. In
                    felis vestibulum phasellus nunc eu turpis eget ac.
                  </Text>
                  <Pressable
                    style={{
                      marginVertical: 10,
                      flex: 1,
                      alignItems: "flex-end",
                    }}
                  >
                    <Text
                      style={{
                        backgroundColor: "#9F9F9F",
                        borderRadius: 4,
                        color: "#fff",
                        fontSize: 16,
                        fontWeight: "bold",
                        paddingHorizontal: 15,
                        paddingVertical: 5,
                        textAlign: "center",
                      }}
                    >
                      Joined
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default GroupScreen;

const styles = StyleSheet.create({});
