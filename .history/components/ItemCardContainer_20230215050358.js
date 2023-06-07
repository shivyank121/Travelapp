import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'



const ItemCardContainer = ({imageSrc, title, discription , location}) => {
  return (
  <TouchableOpacity className="rounded-md border border-gray-300 space-y-2 px-3 py-2 shadow-md bg-white w-[180px] my-2">
    <Image 
    source={{uri : imageSrc}}
    className="w-full h-40 rounded-md object-cover"
    
    />
    <Text className="text-lg">{title}</Text>
  </TouchableOpacity>
  )
}

export default ItemCardContainer