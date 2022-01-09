import * as React from "react";
import { View, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import SongsList from "./components/SongsList.jsx";
import PlaySong from "./components/PlaySong.jsx";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator>
      <View style={styles.container}>
        <Stack.Screen
          name="SongsList"
          component={SongsList}
          options={{ title: "SongsList" }}
        />

        <Stack.Screen
          name="PlaySong"
          component={PlaySong}
          options={{ title: "PlaySong" }}
        />
      </View>
    </Stack.Navigator>
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
