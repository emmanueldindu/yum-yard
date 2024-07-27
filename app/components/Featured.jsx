import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { restaurants } from "../../assets/data/data/home";
import bg from "../../assets/data/data/Card.png";
import icon from "../../assets/data/data/icon.png";
import { Ionicons } from "@expo/vector-icons";
const Featured = () => {
  return (
    <View className="mt-6 p-1 grid">
      <Text className="text-[18px]  text-[#0A2533] font-semibold ">
        Featured
      </Text>

      <View className="flex h-[280px]     mt-1">
        {/* <Text className="font-semibold text-sm ">Featured Resturants</Text> */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View className="flex-row gap-5 justify-between">
            {restaurants.map((resturant, index) => (
              <View className="flex-row" key={index}>
                <View className=" h-[230px]   w-[300px] justify-center p-2 mt-4 items-center rounded-xl grid">
                  <View className="w-full justify-between absolute z-[100] h-full flex-row items-center">
                    <View className="w-[70%] mt-24 grid p-2 ">
                      <Text className="text-[18px]  font-semibold text-white">
                        Asian white noodles with extra sea food
                      </Text>
                      <View className="flex-row items-center mt-2 gap-x-2">
                        <Image source={icon} className="h-8 w-8 rounded-full" />
                        <Text className="text-white  text-xs">
                          James spencer
                        </Text>
                      </View>
                    </View>

                    <View className="flex-row mt-28 gap-x-1 items-center w-[30%]">
                      <Ionicons name="alarm-outline" size={19} color="white" />
                      <Text className="text-white">20 min</Text>
                    </View>
                  </View>
                  <Image source={bg} className="h-full w-full rounded-2xl " />
                  {/* <Text className="mt-2 text-sm w-full p-1 font-semibold">
                  {resturant.name}
                </Text>
                <View className="flex-row w-full justify-between px-1 ">
                  <Text>1.2km</Text>
                  <Text>15-20minutes</Text>
                </View> */}
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Featured;
