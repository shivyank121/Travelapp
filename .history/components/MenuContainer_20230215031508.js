import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const MenuContainer = ({title, imageSrc, type, setType}) => {
  return (
   <TouchableOpacity className="items-center justify-center space-y-2">
    <View className="flex-1">
    <Image
    className="w-12 h-12"
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
