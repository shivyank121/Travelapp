import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'



const ItemCardContainer = ({imageSrc, title, discription , location}) => {
  return (
  <TouchableOpacity>
    <Image 
    source={imageSrc}
    
    />
  </TouchableOpacity>
  )
}

export default ItemCardContainer