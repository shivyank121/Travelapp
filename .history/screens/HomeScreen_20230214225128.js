import { View, Text, SafeAreaView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white flex-1 relative">
      {/* { first section}  */}
      <View className="flex-row px-6 mt-8 items-center space-x-2 ">
        <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
          <Text className="text-white">Go</Text>
        </View>
        <Text className="">Travel</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
