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
      <View className="flex-row ">
        <View>
          <Text className="text-red-500">Go</Text>
          <Text className="text-lg">Travel</Text>
        </View>
     
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
