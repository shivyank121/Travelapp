import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const MenuContainer = ({ title, imageSrc, type, setType }) => {

    const handlePress = () =>{
        setType(title.toLowerCase())
    }

  return (
    <TouchableOpacity
      className="items-center justify-center space-y-2"
      onPress={handlePress}
    >
      <View
        className={`items-center justify-center rounded-full shadow-sm ${
          type === title.toLowerCase() ? "bg-gray-200" : ""
        }`}
      >
        <Image source={imageSrc} className="w-24 h-24 object-contain" />
      </View>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default MenuContainer;
