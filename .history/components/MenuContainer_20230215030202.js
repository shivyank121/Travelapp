import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

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
        <Image source={imageSrc}  className="w-full h-full object-cover"/>
      </View>
      
    </TouchableOpacity>
  );
};

export default MenuContainer;