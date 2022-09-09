import styled, { css } from "styled-components/native";
import { Button } from "../../components/Button";

export const LinkTouchableOpacity = styled.TouchableOpacity``;

export const LinkText = styled.Text`
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.link};
`;

export const ProfileActionButtonsView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const StyledButton = styled(Button)`
  max-width: 48%;
`;

export const PostImageBackground = styled.ImageBackground`
  flex: 1;
  height: 100px;
  /* flex-basis: 33%; */
`;
