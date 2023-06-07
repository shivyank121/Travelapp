import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const ItemScreen = ({route}) => {
    const navigation = useNavigation();

   const data = route?.param

  return (
    <View>
      <Text>ItemScreen</Text>
    </View>
  )
}

export default ItemScreen