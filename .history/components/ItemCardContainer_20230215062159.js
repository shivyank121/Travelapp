import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';

const ItemCardContainer = ({ imageSrc, title, rawranking, location }) => {
  return (
    <TouchableOpacity className="rounded-lg border border-gray-300 space-y-2 px-3 py-2 shadow-md bg-white w-[180px] my-2">
      <Image
        source={{ uri: imageSrc }}
        className="w-full h-40 rounded-lg object-cover"
      />

      {title ? (
        <>
          <Text className="text-base font-bold ">
            {title?.length > 14 ? `${title.slice(0, 14)}..` : title}
          </Text>
          <View className="flex-row items-center space-x-1">
            <Feather name="map-pin" size={16} color="#c9c9c9" />
            <Text className="text-base font-bold text-[#2a2b4b] ">
              {location?.length > 14 ? `${title.slice(0, 14)}..` : location}
            </Text>
          </View>
          <View>
            <Text>
            <FontAwesome name="star" size={24} color="orange" />
            {Math.round(rawranking)}
            </Text>
          </View>
        </>
      ) : (
        <></>
      )}
    </TouchableOpacity>
  );
};

export default ItemCardContainer;
