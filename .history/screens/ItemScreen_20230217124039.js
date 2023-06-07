import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native'
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
    <ScrollView className="flex-1 px-4 py-6">
        <View className="relative bg-white shadow-lg">
           <Image
           source={
            {uri: 
                data?.photo?.images?.medium?.url ?
                data?.photo?.images?.medium?.url: "https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png"

            }
           }
           
           />
        </View>
    </ScrollView>

   </SafeAreaView>
   
  )
}

export default ItemScreen