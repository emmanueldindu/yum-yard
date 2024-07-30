import { View, Text, Pressable, Image, TouchableOpacity } from "react-native";
import React from "react";

import { restaurants } from "../../../assets/data/data/home";
import StaggeredList from "@mindinventory/react-native-stagger-view";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";



export default function Meals() {

  const navigation = useNavigation()
  const renderChildren = (item) => {
    return (
      <TouchableOpacity
        className="rounded-3xl gap-1  mb-12"
        style={getChildrenStyle()}
        onPress={() => navigation.navigate('Details', {item})}
        key={item.id}
      >
        <View>
          <Image
            onError={() => {}}
            className="w-full h-full rounded-3xl "
            source={item.img}
            resizeMode={"cover"}
          />
          <View className="w-full flex absolute z-[100]">
            <TouchableOpacity className="absolute z-[100] mt-3  mx-[120px] rounded-lg items-center p-1 flex-row justify-center w-[35px]   h-8  bg-white  ">
   
              <Ionicons
                name="heart-outline"
                className="items-center"
                size={20}
                color={"black"}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Text className="p-1 font-semibold">{item.name}</Text>
        <View className="flex-row justify-between">
          <View className="flex-row p-1 gap-1">
            <Ionicons name="flame-outline" size={16} color="#97A2B0" />
            <Text className="text-[#97A2B0] text-xs">
              {item.calories} Kcal{" "}
            </Text>
          </View>

          <View className="flex-row p-1 gap-1">
            <Ionicons name="time-outline" size={16} color="#97A2B0" />
            <Text className="text-[#97A2B0] text-xs">
              {item.duration}m{" "}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const getChildrenStyle = () => {
    return {
      height: Number(Math.random() * 20 + 12) * 10,
      // backgroundColor: "white",
      margin: 4,
      borderRadius: 18,
      padding: 12,
    };
  };

  return (
    <View className="p-1 mt-2 grid h-auto  ">
      <Text className="text-[18px]  text-[#0A2533] font-semibold ">Meals</Text>

      <View style={{ flex: 1 }} className="mt-4">
        <StaggeredList
          data={restaurants}
          animationType={"FADE_IN_FAST"}
          // contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => renderChildren(item)}
          // isLoading={isLoading}
        />
      </View>
    </View>
  );
}
