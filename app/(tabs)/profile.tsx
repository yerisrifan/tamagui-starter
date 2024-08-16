import { YStack, Text, Button, Switch, XStack, Label } from "tamagui";
import { useRouter } from "expo-router";
import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";

export default function Settings() {
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  return (
    <YStack f={1} jc="center" ai="center" space>
      <Text fontSize="$6">Settings Page</Text>
      <XStack space ai="center">
        <Label htmlFor="notifications">Enable Notifications</Label>
        <Switch
          id="notifications"
          checked={notificationsEnabled}
          onCheckedChange={setNotificationsEnabled}
        >
          <Switch.Thumb />
        </Switch>
      </XStack>
      <XStack space ai="center">
        <Label htmlFor="theme">Dark Theme</Label>
        <Switch
          id="theme"
          checked={theme === "dark"}
          onCheckedChange={toggleTheme}
        >
          <Switch.Thumb />
        </Switch>
      </XStack>
      <Button onPress={() => router.back()}>Go Back</Button>
    </YStack>
  );
}
