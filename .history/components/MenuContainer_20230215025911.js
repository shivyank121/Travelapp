import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const MenuContainer = ({title, imageSrc, type, setType}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Discover")}
      className="flex-row space-y-2 items-center justify-center"
    >
      <View
        className={`w-24 h-24 items-center justify-center rounded-full shadow-sm ${
          type === title.toLowerCase() ? "bg-gray-200" : ""
        }`}
      >
        <Image source={imageSrc}  className="w-full h-full object-cover"/>
      </View>
      <Text className=" text-xl text-[#00bcc9] font-semibold">{title}</Text>
    </TouchableOpacity>
  );
};

export default MenuContainer;
