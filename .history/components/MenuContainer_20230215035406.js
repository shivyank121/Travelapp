import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const MenuContainer = ({title, imageSrc, type, setType}) => {
  return (
   <TouchableOpacity className="items-center justify-center space-y-2"
   onPress={() => navigation.navigate("Discover")}>
    <View className={`items-center justify-center rounded-full shadow-sm ${
    type === title.toLowerCase() ? "bg-gray-200" : ""
  }`}>
    <Image
    className="w-full h-full object-contain"
    source={imageSrc}

    />
    </View>
   <Text>
{title}
   </Text>
   </TouchableOpacity>
  );
};

export default MenuContainer;




