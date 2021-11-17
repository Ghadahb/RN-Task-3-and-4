import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./components/Home";
import ShopDetail from "./components/ShopDetail";
import ShopList from "./components/ShopList";

export default function App() {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        {/* <Home /> */}
        <ShopList />
        {/* <ShopDetail /> */}
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
