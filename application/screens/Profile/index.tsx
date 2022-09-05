import { StyleSheet, Text, View } from "react-native";

import AppIcons from "@expo/vector-icons/Feather";

export const Profile = () => {
  return (
    <View style={styles.container}>
      <View>
        {/* <ImageBackground /> */}
        <View>
          <Text>olsendrake</Text>
          <AppIcons name="menu" />
        </View>

        <View>
          <View>
            <Text>90</Text>
            <Text>Posts</Text>
          </View>

          <View>
            <Text>400</Text>
            <Text>Seguidores</Text>
          </View>

          <View>
            <Text>530</Text>
            <Text>Seguindo</Text>
          </View>
        </View>

        <View>
          <Text>Drake Olsen</Text>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
        </View>
      </View>
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
