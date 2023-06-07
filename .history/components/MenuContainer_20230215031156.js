import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const MenuContainer = ({title, imageSrc, type, setType}) => {
  return (
   <TouchableOpacity className="items-center justify-center space-y-2">
    <View>
    <Image
    source={imageSrc}

    />
    </View>
   <Text>

   </Text>
   </TouchableOpacity>
  );
};

export default MenuContainer;
