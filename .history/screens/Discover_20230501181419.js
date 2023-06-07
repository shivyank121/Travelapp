import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Attraction, Attractions, AvatarImage, Hotel, Hotels, Restaurants } from "../assets/Index";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MenuContainer from "../components/MenuContainer";
import { Entypo } from "@expo/vector-icons";
import ItemCardContainer from "../components/ItemCardContainer";
import { AntDesign } from "@expo/vector-icons";
import { getPlacesData } from "../api/Index";

const Discover = () => {
  const navigation = useNavigation();
  const [type, setType] = useState("restaurants");
  const [isLoading, setIsLoading] = useState(false);
  const [mainData, setMainData] = useState([]);
  const [bl_lat, setBl_lat] = useState(null);
  const [bl_lng, setBl_lng] = useState(null);
  const [tr_lat, setTr_lat] = useState(null);
  const [tr_lng, setTr_lng] = useState(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getPlacesData(bl_lat, bl_lng, tr_lat, tr_lng, type).then((data) => {
      setMainData(data);
      setInterval(() => {
        setIsLoading(false);
      }, 2000);
    });
  }, [bl_lat, bl_lng, tr_lat, tr_lng, type]);

  return (
    <SafeAreaView className="bg-white flex-1 relative">
      {/* { first section}  */}
      <View className="flex-row  items-center justify-between px-8 ">
        <View className="">
          <Text className="text-[40px] text-[#0b646b] font-bold">Discover</Text>
          <Text className="Text-[#527283] text-[36px]">Today's Beauty</Text>
        </View>
        <View className="w-12 h-12 bg-gray-400 rounded-full items-center justify-center shadow-lg">
          <Image
            className="w-full h-full rounded-full object-cover"
            source={AvatarImage}
          />
        </View>
      </View>
      <View className="flex-row items-center bg-white mx-4 rounded-xl  px-4 shadow-sm border border-gray-400">
        <GooglePlacesAutocomplete
          GooglePlacesDetailsQuery={{ fields: "geometry" }}
          placeholder="Search for the location"
          fetchDetails={true}
          onPress={(details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(details?.geometry?.viewport);
            setBl_lat(details?.geometry?.viewport?.southwest?.lat);
            setBl_lng(details?.geometry?.viewport?.southwest?.lng);
            setTr_lat(details?.geometry?.viewport?.northeast?.lat);
            setTr_lng(details?.geometry?.viewport?.northeast?.lng);
          }}
          query={{
            key: "AIzaSyCFkdUGV7NraU8GBnWFxMRpko7NAo1DCsQ",
            language: "en",
          }}
        />
      </View>

      {/* {Menu container} */}
      {isLoading ? (
        <View className=" flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#0b646b" />
        </View>
      ) : (
        <ScrollView>
          <View className="flex-row justify-center items-center">
            <View className="flex-row items-center justify-center px-8 mt-8">
              <MenuContainer
                key={"hotels"}
                title="Hotels"
                imageSrc={Hotel}
                type={type}
                setType={setType}
              />
            </View>
            <View className="flex-row items-center justify-center px-8 mt-8">
              <MenuContainer
                key={"attraction"}
                title="Attractions"
                imageSrc={Attraction}
                type={type}
                setType={setType}
              />
            </View>
            <View className="flex-row items-center justify-center px-8 mt-8">
              <MenuContainer
                key={"restaurants"}
                title="Restaurants"
                imageSrc={Restaurants}
                type={type}
                setType={setType}
              />
            </View>
          </View>

          <View>
            <View className="flex-row items-center text-center  justify-between px-4 mt-8 align-middle ">
              <Text className="text-[24px] font-bold text-[#2c7379]">
                Too Trips
              </Text>
              <TouchableOpacity className="flex-row items-center justify-center space-x-2">
                <Text className="font-semibold text-gray-500">Explore</Text>
                <Entypo name="arrow-long-right" size={16} color="#c4c4c4" />
              </TouchableOpacity>
            </View>

            <View className=" mt-8 flex-row items-center justify-evenly flex-wrap">
              {mainData?.length > 0 ? (
                <>
                  {mainData?.map((data, i) => (
                    <ItemCardContainer
                      key={i}
                      imageSrc={
                        data?.photo?.images?.medium?.url
                          ? data?.photo?.images?.medium?.url
                          : "https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png"
                      }
                      title={data?.name}
                      location={data?.location_string}
                      data={data}
                      rawranking={data?.raw_ranking}
                    />
                  ))}
                </>
              ) : (
                <>
                  <View className="w-full h-[400px] items-center align-middle justify-center space-y-4">
                    <AntDesign name="frowno" size={46} color="#c4c4c4" />
                    <Text className="items-center justify-center text-xl text-gray-500">
                      Opps.. No data found{" "}
                    </Text>
                  </View>
                </>
              )}
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Discover;
