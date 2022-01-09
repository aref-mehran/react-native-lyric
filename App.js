import * as React from "react";
import { View, StyleSheet } from "react-native";

import SongsList from "./SongsList.jsx";

export default function App() {
  return (
    <View style={styles.container}>
      <SongsList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 10
  }
});
