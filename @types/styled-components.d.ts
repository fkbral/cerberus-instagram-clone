import "styled-components/native";
import { lightTheme } from "../application/themes/lightTheme";

type CustomTheme = typeof lightTheme;

declare module "styled-components/native" {
  export interface DefaultTheme extends CustomTheme {}
}
