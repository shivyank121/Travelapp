import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const MenuContainer = (title, imageSrc, type,setType) => {
  return (
    <TouchableOpacity 
    onPress={()=> navigation.navigate("Discover")}
    className="absolute bottom-20 w-24 h-24 border-l-2  border-t-4 border-r-2 border-[#00BCC9] rounded-full items-center justify-center">
      <View
       
        className={`w-20 h-20 items-center justify-center rounded-full shadow-sm ${type === title.toLowerCase() ? "bg-gray-200" : "" }`}>
       <Image
       source={imageSrc} 
       />
      </View>
      <Text className=" text-[30px] font-semibold">{title}</Text>
    </TouchableOpacity>
  )
}

export default MenuContainer