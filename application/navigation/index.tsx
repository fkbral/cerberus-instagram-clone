import { NavigationContainer } from "@react-navigation/native";
import { ReactNode } from "react";
import { MainTabs } from "./MainTabs";

export type RootStackParamList = {
  Feed: undefined;
  Search: undefined;
  Reels: undefined;
  Shop: undefined;
  Profile: undefined;
};

// type NavigationProps = {
//   children: ReactNode;
// };

export const NavigationRoot = () => {
  return (
    <NavigationContainer>
      <MainTabs />
    </NavigationContainer>
  );
};
