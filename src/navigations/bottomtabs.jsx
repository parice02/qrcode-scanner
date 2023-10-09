import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Camera from "../screens/camera";
import History from "../screens/camera";

const Tab = createBottomTabNavigator();

export default function MyBottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Caméra" component={Camera} />
      <Tab.Screen name="Historique" component={History} />
    </Tab.Navigator>
  );
}
