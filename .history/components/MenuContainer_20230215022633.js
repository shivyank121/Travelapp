import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const MenuContainer = (titel, imageSrc, type,setType) => {
  return (
    <TouchableOpacity 
    onPress={()=> navigation.navigate("Discover")}
    className="absolute bottom-20 w-24 h-24 border-l-2  border-t-4 border-r-2 border-[#00BCC9] rounded-full items-center justify-center">
      <View
       
        className="w-20 h-20 items-center justify-center rounded-full bg-[#00BCC9]"
      >
       
      </View>
      <Text className="text-gray-50 text-[30px] font-semibold">Go</Text>
    </TouchableOpacity>
  )
}

export default MenuContainer