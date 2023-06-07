import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const MenuContainer = ({title, imageSrc, type, setType}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Discover")}
      className="space-y-2 items-center justify-center"
    >
      <View
        className={`w-24 h-24 items-center justify-center rounded-full shadow-sm ${
          type === title.toLowerCase() ? "bg-gray-200" : ""
        }`}
      >
        <Image source={imageSrc} />
      </View>
      <Text className=" text-[30px] font-semibold">{title}</Text>
    </TouchableOpacity>
  );
};

export default MenuContainer;
