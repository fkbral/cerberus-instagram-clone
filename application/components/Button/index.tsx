import { Text } from "react-native";
import * as S from "./styles";

export const Button = ({ children, ...rest }) => {
  return (
    <S.ButtonTouchableOpacity {...rest}>
      <S.ButtonText>{children}</S.ButtonText>
    </S.ButtonTouchableOpacity>
  );
};
