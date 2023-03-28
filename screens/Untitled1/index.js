import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { Text } from "react-native";
import { Slider } from "react-native-elements";
import { View } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><View style={styles.kazNMeQR}></View><Slider style={styles.nBVzpqid} thumbStyle={{
        height: 20,
        width: 20
      }} thumbTintColor="#0000FF" maximumValue={1} minimumValue={1} value={56}></Slider><Pressable onPress={() => {
        navigation.navigate("", {
          test: "test45"
        });
      }}><Text style={styles.UVVoeuYr}>Testing World </Text></Pressable></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  kazNMeQR: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  },
  nBVzpqid: {
    width: 150,
    height: 40,
    transform: [{
      rotate: "6deg"
    }],
    top: 0,
    left: 0
  },
  UVVoeuYr: {
    width: 100,
    height: 76,
    lineHeight: 20,
    fontSize: 22,
    borderRadius: 0,
    transform: [{
      rotate: "0deg"
    }],
    top: 372,
    left: 109,
    gap: 78,
    flexWrap: "wrap",
    fontFamily: "Nunito",
    textAlign: "center",
    fontWeight: "200",
    letterSpacing: 5,
    position: "absolute",
    flexDirection: "row",
    flex: 1,
    alignItems: "stretch",
    justifyContent: "flex-start"
  }
});
export default Untitled1;