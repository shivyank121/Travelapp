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
          <Text className="text-[#4dabb7] text-3xl font-semibold ">Go</Text>
        </View>
        <Text className=" text-[#2a2b4b] text-3xl font-semibold ">Travel</Text>
      </View>

      {/* { second section} */}

      <View className=" px-6 mt-8  space-y-3 ">
        <Text className="text-[#3c6072] text-[42px] font-bold ">
          Enjoy the trip with
        </Text>

        <Text className=" text-[#4dabb7] text-[38px] font-bold ">
          Good Moments
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
