import { YStack, Text, Button } from "tamagui";
import { useRouter } from "expo-router";
import { useTheme } from "@/context/ThemeContext";

export default function Home() {
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();

  return (
    <YStack f={1} jc="center" ai="center" space>
      <Text fontSize="$6">Welcome to Expo + Tamagui!</Text>
      <Text>Current theme: {theme}</Text>
      <Button onPress={toggleTheme}>Toggle Theme</Button>
      <Button onPress={() => router.push("/saved")}>Go to About</Button>
      <Button onPress={() => router.push("/profile")}>Go to Settings</Button>
    </YStack>
  );
}
