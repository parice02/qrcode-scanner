import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import BottomTabs from "./src/navigations/bottom-tabs";

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
}
