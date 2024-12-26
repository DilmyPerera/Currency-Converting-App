import React from "react";
import { SafeAreaView } from "react-native";
import { PaperProvider } from "react-native-paper";
import Home from "./components/Home";

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Home />
      </SafeAreaView>
    </PaperProvider>
  );
}
