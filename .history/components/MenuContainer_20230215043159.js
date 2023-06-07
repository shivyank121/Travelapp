import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const MenuContainer = ({ title, imageSrc, type, setType }) => {
  return (
    <TouchableOpacity
      className="items-center justify-center space-y-2"
      onPress={() => navigation.navigate("Discover")}
    >
      <View
        className={`items-center justify-center rounded-full shadow-sm ${
          type === title.toLowerCase() ? "bg-gray-600" : ""
        }`}
      >
        <Image source={imageSrc} className="w-24 h-24 object-contain" />
      </View>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default MenuContainer;