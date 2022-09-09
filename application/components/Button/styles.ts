import styled, { css } from "styled-components/native";

export const ButtonTouchableOpacity = styled.TouchableOpacity`
  ${({ theme }) => css`
    padding: 4px;
    height: 32px;
    border-radius: ${theme.sizes.borderRadius.default};
    background-color: ${theme.colors.link};
    flex: 1;

    justify-content: center;
    align-items: center;
  `}
`;

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    color: #fff;
    font-weight: 700;
  `}
`;
