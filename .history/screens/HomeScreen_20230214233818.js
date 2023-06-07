import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { HeroImage } from "../assets/Index";
import * as Animatable from "react-native-animatable";

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white flex-1 relative">
      {/* { first section}  */}
      <View className="flex-row px-6 mt-8 items-center space-x-2 ">
        <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
          <Text className="text-[#4dabb7] text-3xl font-semibold ">Go</Text>
        </View>
        <Text className=" text-[#2a2b4b] text-3xl font-semibold ">Travel</Text>
      </View>

      {/* { second section} */}

      <View className=" px-6 mt-8  space-y-3 ">
        <Text className="text-[#3c6072] text-[42px] font-bold ">
          Enjoy the trip with
        </Text>

        <Text className=" text-[#4dabb7] text-[38px] font-bold ">
          Good Moments
        </Text>

        <Text className=" text-[#3c6072]  ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
          quisquam libero impedit quos suscipit incidunt,
        </Text>
      </View>

      {/* { circle section} */}

      <View className="w-[400px] h-[400px] bg-[#00bcc9] rounded-full absolute bottom-36 -right-36"></View>

      <View className="w-[400px] h-[400px] bg-[#E99265] rounded-full absolute bottom-0 -left-36"></View>
      {/* { image container} */}
      <View className="flex-1 relative items-center justify-center ">
        <Animatable.Image
          animation="fadeIn"
          easing="ease-in-out"
          source={HeroImage}
          className="w-full h-full  object-cover mt-20"
        />
        <TouchableOpacity className="absolute bottom-20 w-24 h-24 border-l-2  border-t-4 border-r-2 border-[#00BCC9] rounded-full items-center justify-center">
         
            <Animatable.View
              animation={"pulse"}
              easing="ease-in-out"
              iterationCount={"infinite"}
              className="w-20 h-20 items-center justify-center rounded-full bg-[#00BCC9]"
            >
              <Text className="text-gray-50 text-[30px] font-semibold">Go</Text>
            </Animatable.View>
        
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
