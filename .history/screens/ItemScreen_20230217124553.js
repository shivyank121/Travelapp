import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Entypo } from '@expo/vector-icons';
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
                data?.photo?.images?.large?.url ?
                data?.photo?.images?.large?.url: "https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png"

            }
           }
           
           className="w-full h-72 object-cover  rounded-xl"
           />

           <View className="absolute flex-row inset-x-0 top-5 justify-between px-6">
           <TouchableOpacity className="w-10 h-10 rounded-md items-center justify-center bg-white">
           <Entypo name="chevron-left" size={24} color="#06b2be" />
           </TouchableOpacity>
           <TouchableOpacity className="w-10 h-10 rounded-md items-center justify-center bg-[#06b2be]">

           </TouchableOpacity>
           </View>
        </View>
    </ScrollView>

   </SafeAreaView>
   
  )
}

export default ItemScreen