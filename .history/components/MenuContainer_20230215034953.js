import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const MenuContainer = ({title, imageSrc, type, setType}) => {
  return (
   <TouchableOpacity className="items-center justify-center space-y-2">
    <View className="flex-row">
    <Image
    className="w-12 h-12"
    source={imageSrc}

    />
    </View>
   <Text>
{title}
   </Text>
   </TouchableOpacity>
     <TouchableOpacity
     onPress={() => navigation.navigate("Discover")}
     className="items-center justify-center"
   >
     <View
       className={`items-center justify-center rounded-full shadow-sm ${
         type === title.toLowerCase() ? "bg-gray-200" : ""
       }`}
     >
       <Image source={imageSrc}  className="w-full h-full object-contain"/>
     </View>
     <Text className=" text-neutral-500 text-lg font-semibold">{title}</Text>
   </TouchableOpacity>
  );
};

export default MenuContainer;


import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const MenuContainer = ({title, imageSrc, type, setType}) => {
  return (
  
  );
};

export default MenuContainer;
