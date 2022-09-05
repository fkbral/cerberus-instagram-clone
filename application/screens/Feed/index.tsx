import { StyleSheet, Text, View } from "react-native";

export const Feed = () => {
  return (
    <View style={styles.container}>
      <Text>Feed</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 400,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
