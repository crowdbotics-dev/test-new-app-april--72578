import { TextInput } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled2 = () => {
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      flex: 1,
      flexDirection: 'row',
      padding: 10,
      backgroundColor: '#f0f0f1'
    }}>     
          <View style={styles.row1}><TextInput style={styles.gqVKCccC}></TextInput></View>
          <View style={styles.row2}><View style={styles.xzrjkLQk}></View><View style={styles.QSaUmfAm}></View><View style={styles.lRYPKpiS}></View></View>
          <View style={styles.row3}></View>  
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  row1: {
    flex: 1
  },
  row2: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  row3: {
    flex: 1
  },
  xzrjkLQk: {
    flex: 1
  },
  QSaUmfAm: {
    flex: 1
  },
  lRYPKpiS: {
    flex: 1
  },
  gqVKCccC: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  }
});
export default Untitled2;