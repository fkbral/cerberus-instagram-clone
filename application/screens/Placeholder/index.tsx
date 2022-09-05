import { StyleSheet, Text, View } from "react-native";

export const Placeholder = () => {
  return (
    <View style={styles.container}>
      <Text>Em construção</Text>
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
