import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';
const ItemScreen = ({ route }) => {
  const navigation = useNavigation();

  const data = route?.params?.param;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  console.log(data);

  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <ScrollView className="flex-1 px-4 py-6">
        <View className="relative bg-white shadow-lg">
          <Image
            source={{
              uri: data?.photo?.images?.large?.url
                ? data?.photo?.images?.large?.url
                : "https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png",
            }}
            className="w-full h-72 object-cover  rounded-xl"
          />

          <View className="absolute flex-row inset-x-0 top-5 justify-between px-6">
            <TouchableOpacity
              onPress={() => navigation.navigate("Discover")}
              className="w-10 h-10 rounded-md items-center justify-center bg-white"
            >
              <Entypo name="chevron-left" size={24} color="#06b2be" />
            </TouchableOpacity>
            <TouchableOpacity className="w-10 h-10 rounded-md items-center justify-center bg-[#06b2be]">
              <AntDesign name="heart" size={20} color="#fff" />
            </TouchableOpacity>
          </View>

          <View className="absolute flex-row inset-x-0 bottom-5 justify-between px-6">
            <View className="flex-row space-x-2 items-center">
              <Text className="text-[12px] font-bold text-gray-100">
                {data?.price_level}
              </Text>
              <Text className="text-[24px] font-bold text-gray-100">
                {data?.price}
              </Text>
            </View>

            <View className="px-2 py-2 rounded-md bg-teal-100">
              <Text className="">{data?.open_now_text}</Text>
            </View>
          </View>
        </View>

        <View className="mt-6'">
          <Text className="text-[#212121] text-[24px] font-bold mt-6">
            {data?.name}
          </Text>
          <View className="flex-row items-center space-x-2 mt-2">
            <Feather name="map-pin" size={16} color="#c9c9c9" />
            <Text className="text-[#8c9ea6] text-[16px] font-bold">
              {data?.location_string}
            </Text>
          </View>
        </View>
   
   <View className="mt-4 flex-row items-center justify-between">
   <View className="flex-row items-center space-x-1">
          <FontAwesome name="star" size={16} color="orange" />
            <Text className="text-base font-bold text-[#2a2b4b] ">
            {Math.round(rating)}
            </Text>
          </View>
   </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default ItemScreen;
