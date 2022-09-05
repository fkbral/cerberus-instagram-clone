import React, { ReactNode } from "react";
import { View } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { lightTheme } from "./themes/lightTheme";

type AppProviderProps = {
  children: ReactNode;
};

export const AppProviders = ({ children, ...rest }: AppProviderProps) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <View style={{ flex: 1 }} {...rest}>
        {children}
      </View>
    </ThemeProvider>
  );
};
