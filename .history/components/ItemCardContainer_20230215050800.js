import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';


const ItemCardContainer = ({imageSrc, title, discription , location}) => {
  return (
  <TouchableOpacity className="rounded-md border border-gray-300 space-y-2 px-3 py-2 shadow-md bg-white w-[180px] my-2">
    <Image 
    source={{uri : imageSrc}}
    className="w-full h-40 rounded-md object-cover"
    
    />
    <Text className="text-base font-bold ">{title?.length > 14 ?`${title.slice(0,14)}..` : title }</Text>
    <View>
    <Feather name="map-pin" size={24} color="#dbdbdb" />
    <Text className="text-base font-bold ">{title?.length > 14 ?`${title.slice(0,14)}..` : title }</Text>
    </View>
  </TouchableOpacity>
  )
}

export default ItemCardContainer