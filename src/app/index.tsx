import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-blue-700 dark:bg-red-700">
      <Text className="text-lg font-semibold text-blue-500 dark:text-blue-300">
        Tailwind is working! 🎉
      </Text>
      <Text className="mt-2 text-gray-600 dark:text-gray-400">
        Edit <Text className="font-mono text-black dark:text-white">app/index.tsx</Text> to modify this screen.
      </Text>
    </View>
  );
}
