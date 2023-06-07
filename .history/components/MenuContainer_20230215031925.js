import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const MenuContainer = ({title, imageSrc, type, setType}) => {
  return (
    <TouchableOpacity
    onPress={() => navigation.navigate("Discover")}
    className="items-center justify-center"
  >
    <View
      className={`w-24 h-24 items-center justify-center rounded-full shadow-sm ${
        type === title.toLowerCase() ? "bg-gray-200" : ""
      }`}
    >
      <Image source={imageSrc}  className="w-full h-full object-fill"/>
    </View>
    <Text className=" text-lg text-[#00bcc9] font-semibold">{title}</Text>
  </TouchableOpacity>
  );
};

export default MenuContainer;
