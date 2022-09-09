import { FlatList, StyleSheet, Text, View } from "react-native";
import { fakePosts } from "../../../__test__/data/posts";
import { PostDetail } from "../../components/PostDetail";

export const Feed = () => {
  const feedPosts = fakePosts;
  return (
    <View style={styles.container}>
      <FlatList
        data={feedPosts}
        renderItem={({ item }) => <PostDetail post={item} />}
      />
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
