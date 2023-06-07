import { View, Text, SafeAreaView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const ItemScreen = ({route}) => {
    const navigation = useNavigation();

   const data = route?.params?.param;
   useLayoutEffect(() => {
    navigation.setOptions({
        headerShown:false,
    });
   },[]);

   console.log(data);

  return (
   <SafeAreaView className="flex-1 bg-white relative">

   </SafeAreaView>
   
  )
}

export default ItemScreen