import { View, Pressable, Text } from "react-native"
import { Ionicons, Feather } from "@expo/vector-icons"

export function Header() {
  return (
  <View className="w-full flex flex-row items-center justify-between">
    <Pressable className="h-10 w-10 bg-white rounded-full flex justify-center items-center">
      <Ionicons name="menu" size={20} color="121212"/>
    </Pressable>
    <View className="flex flex-col items-center justify-center">
      <Text className="text-center text-sm text-slate-800">Localização</Text>
      <View className="flex-row items-center justify-center gap-1">
        <Feather name="map-pin" size={14} color="#FF0000" />
        <Text className="text-lg font-bold">Recife</Text>
      </View>
    </View>
    <Pressable className="h-10 w-10 bg-white rounded-full flex justify-center items-center">
      <Feather name="bell" size={20} color="121212"/>
    </Pressable>
  </View>
)
}