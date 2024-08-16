import { Tabs } from "expo-router/tabs";
import { useTheme } from "tamagui";
import { Home, User, Settings } from "@tamagui/lucide-icons";
import { TamaguiProvider, Theme, Text } from "tamagui";
import config from "@/tamagui.config";

export default function TabsLayout() {
  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: theme.background.val,
        },
        tabBarActiveTintColor: theme.color.val,
        tabBarInactiveTintColor: theme.color.val + "80", // 50% opacity
        headerStyle: {
          backgroundColor: theme.background.val,
        },
        headerTintColor: theme.color.val,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <Home color={color} />,
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "About",
          tabBarIcon: ({ color }) => <User color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => <Settings color={color} />,
        }}
      />
    </Tabs>
  );
}
