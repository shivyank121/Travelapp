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
import { FontAwesome } from "@expo/vector-icons";

import { Foundation } from "@expo/vector-icons";

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
          {data?.rating && (
            <View className="flex-row items-center space-x-2">
              <View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md">
                <FontAwesome name="star" size={24} color="orange" />
              </View>
              <View>
                <Text className=" font-bold text-[#2a2b4b] ">
                  {data?.rating}
                </Text>
                <Text className="font-bold text-[#515151] ">Rating</Text>
              </View>
            </View>
          )}

          {data?.price_level && (
            <View className="flex-row items-center space-x-2">
              <View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md">
                <Foundation name="dollar" size={24} color="black" />
              </View>
              <View>
                <Text className=" font-bold text-[#2a2b4b] ">
                  {data?.price_level}
                </Text>
                <Text className="font-bold text-[#515151] ">Price level</Text>
              </View>
            </View>
          )}

          {data?.bearing && (
            <View className="flex-row items-center space-x-2">
              <View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md">
                <FontAwesome name="map-signs" size={24} color="black" />
              </View>
              <View>
                <Text className=" font-bold text-[#2a2b4b] ">
                  {data?.bearing}
                </Text>
                <Text className="font-bold text-[#515151] ">Price level</Text>
              </View>
            </View>
          )}
        </View>
        {data?.description && (
          <Text className="mt-4 tracking-wide text-[16px]  font-semibold bold text-[#97a6af] ">
            {data?.description}
          </Text>
        )}

        {data?.cuisine && (
          <View className="flex-row gap-2 items-center justify-start flex-wrap mt-4">
            {data?.cuisine.map((n) => (
              <TouchableOpacity
                key={n.key}
                className="px-2 py-1 rounded-md bg-emerald-100"
              >
                <Text>{n.name} </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        <View className="space-y-2 mt-4 bg-gray-100 rounded-2xl px-4 py-2">
          {data?.phone && (
            <View className="flex-row items-center space-x-6">
              <FontAwesome name="phone" size={24} color="#428288" />
              <Text className="text-lg">{data?.phone}</Text>
            </View>
          )}
          {data?.email && (
            <View className="flex-row items-center space-x-6">
              <FontAwesome name="envelope" size={24} color="#428288" />
              <Text className="text-lg">{data?.email}</Text>
            </View>
          )}
          {data?.address && (
            <View className="flex-row items-center space-x-6">
              <FontAwesome name="envelope" size={24} color="#428288" />
              <Text className="text-lg">{data?.address}</Text>
            </View>
          )}

          <View className="mt-4 px-4 py-4 rounded-lg bg-[#06b2be] items-center justify-center mb-12">
    <Text className="text-3xl font-semibold uppercase tracking-wider text-gray-100">

    </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ItemScreen;
