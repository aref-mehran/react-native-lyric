import * as React from "react";
import { ScrollView, StyleSheet, Image, View } from "react-native";
import { List, Text, Chip, Divider, useTheme } from "react-native-paper";
import { songsList } from "../db/db";
const SongsList = () => {
  const {
    colors: { background }
  } = useTheme();

  return (
    <ScrollView style={[styles.container, { backgroundColor: background }]}>
      <List.Section>
        <List.Subheader>Custom description</List.Subheader>

        {songsList.map((song) => {
          return (
            <List.Item
              left={() => (
                <Image
                  source={require("../assets/favicon.png")}
                  style={styles.image}
                />
              )}
              right={(props) => <List.Icon {...props} icon="star-outline" />}
              title={song.title}
              description={({
                ellipsizeMode,
                color: descriptionColor,
                fontSize
              }) => (
                <View style={[styles.container, styles.column]}>
                  <Text
                    numberOfLines={2}
                    ellipsizeMode={ellipsizeMode}
                    style={{ color: descriptionColor, fontSize }}
                  >
                    {song.title}
                  </Text>
                  <View
                    style={[styles.container, styles.row, { paddingTop: 8 }]}
                  >
                    <Chip icon="download" onPress={() => {}}>
                      دانلود
                    </Chip>
                  </View>
                </View>
              )}
            />
          );
        })}
      </List.Section>
    </ScrollView>
  );
};

SongsList.title = "List.Section";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    height: 40,
    width: 40,
    margin: 8
  },
  row: {
    flexDirection: "row"
  },
  column: {
    flexDirection: "column"
  }
});

export default SongsList;
