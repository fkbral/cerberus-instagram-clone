import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppProviders } from "./application/AppProviders";
import { NavigationRoot } from "./application/navigation";

export default function App() {
  return (
    <AppProviders>
      <NavigationRoot />
    </AppProviders>
  );
}
