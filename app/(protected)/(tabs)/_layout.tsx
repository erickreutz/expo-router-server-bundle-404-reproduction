import React from "react";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen name="(one)" />
      <Tabs.Screen name="(two)" />
      <Tabs.Screen name="(three)" />
    </Tabs>
  );
}
