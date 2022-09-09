import { ImageBackground, Text, View } from "react-native";

type PostDetailProps = {
  post: ProfilePost;
};

export const PostDetail = ({
  post: { user, description, assetUrl, locationTag },
}: PostDetailProps) => {
  return (
    <View>
      <View>
        <ImageBackground
          source={{ uri: user.avatarUrl }}
          style={{ height: 32, width: 32 }}
          resizeMode="cover"
        />

        <View>
          <Text>{user.username}</Text>
          <Text>{locationTag}</Text>
        </View>
      </View>

      <ImageBackground
        source={{ uri: assetUrl }}
        style={{ height: 200, flex: 1 }}
      />

      <View>
        <Text>Liked by miabliss and others</Text>
        <View>
          <Text>{user.username}</Text>
          <Text>{description}</Text>
        </View>
      </View>
    </View>
  );
};
