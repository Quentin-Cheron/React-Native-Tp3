import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="qrcode"
        options={{
          title: "Scan",
          tabBarIcon: () => <Ionicons name="home" size={24} color="#045a4b" />,
          tabBarActiveBackgroundColor: "#06c167",
          tabBarActiveTintColor: "#fff",
        }}
      />
    </Tabs>
  );
}
