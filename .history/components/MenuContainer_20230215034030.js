import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Svg, { Image } from "react-native-svg";
const MenuContainer = ({ title, imageSrc, type, setType }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Discover")}
      className="items-center justify-center"
    >
      <View
        className={`items-center justify-center rounded-full shadow-sm ${
          type === title.toLowerCase() ? "bg-gray-200" : ""
        }`}
      >
        <Svg height="100" width="100">
          <Image source={imageSrc} className="w-full h-full object-contain" />
        </Svg>
      </View>
      <Text className=" text-neutral-500 text-lg font-semibold">{title}</Text>
    </TouchableOpacity>
  );
};

export default MenuContainer;
