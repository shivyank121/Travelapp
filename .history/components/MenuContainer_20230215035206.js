import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const MenuContainer = ({title, imageSrc, type, setType}) => {
  return (
   <TouchableOpacity onPress={() => navigation.navigate("Discover")}
   className="items-center justify-center">
    <View className={`items-center justify-center rounded-full shadow-sm ${
    type === title.toLowerCase() ? "bg-gray-200" : ""
  }`}>
    <Image
  className="w-full h-full object-contain"
    source={imageSrc}

    />
    </View>
   <Text className=" text-neutral-500 text-lg font-semibold">
{title}
   </Text>
   </TouchableOpacity>
  );
};

export default MenuContainer;



