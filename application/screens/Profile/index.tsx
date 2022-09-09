import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import AppIcons from "@expo/vector-icons/Feather";
import * as WebBrowser from "expo-web-browser";
import * as S from "./styles";
import { fakeProfileData } from "../../../__test__/data/profileData";

export const Profile = () => {
  const profileData: ProfileData = fakeProfileData;

  const { user, posts } = profileData;

  async function handleOpenWebPage(url: string) {
    await WebBrowser.openBrowserAsync(url);
  }

  return (
    <View style={styles.container}>
      <View>
        {/* <ImageBackground /> */}
        <View>
          <Text>{user.username}</Text>
          <AppIcons name="menu" />
        </View>

        <View>
          <View>
            <Text>{profileData.posts.length}</Text>
            <Text>Posts</Text>
          </View>

          <View>
            <Text>{profileData.followersNumber}</Text>
            <Text>Seguidores</Text>
          </View>

          <View>
            <Text>{profileData.followingNumber}</Text>
            <Text>Seguindo</Text>
          </View>
        </View>

        <View>
          <Text>{user.name}</Text>
          <Text>{profileData.bio}</Text>
          <S.LinkTouchableOpacity
            onPress={() => handleOpenWebPage("https://google.com/")}
          >
            <S.LinkText>{"https://google.com/"}</S.LinkText>
          </S.LinkTouchableOpacity>

          <S.ProfileActionButtonsView>
            <S.StyledButton>Follow</S.StyledButton>
            <S.StyledButton>Message</S.StyledButton>
          </S.ProfileActionButtonsView>
        </View>

        <FlatList
          numColumns={3}
          data={posts}
          renderItem={({ item }) => (
            <S.PostImageBackground source={{ uri: item.assetUrl }} />
          )}
          keyExtractor={({ assetUrl }) => assetUrl}
        />
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
