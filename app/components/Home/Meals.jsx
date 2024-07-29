import { View, Text, Pressable, Image, TouchableOpacity } from "react-native";
import React from "react";

import { restaurants } from "../../../assets/data/data/home";
import StaggeredList from "@mindinventory/react-native-stagger-view";
import { Ionicons } from "@expo/vector-icons";

export default function Meals() {


 

  const renderChildren = (item) => {
    return (
      <TouchableOpacity className='rounded-3xl gap-1  mb-12' style={getChildrenStyle()} key={item.id}>
        <View >
          <Image
            onError={() => {}}
            className='w-full h-full rounded-3xl '
            source={item.img}
            resizeMode={"cover"}
          />
            <View className="w-full flex absolute z-[100]">
                  <TouchableOpacity className="absolute z-[100] mt-3  mx-[120px] rounded-lg items-center p-1 flex-row justify-center w-[35px]   h-8  bg-white  ">
                    {/* <Ionicons
                      name="star"
                      color={"gold"}
                      className="items-center "
                    /> */}

                     <Ionicons name="heart-outline" className='items-center' size={20} color={'black'} />
                  
                  </TouchableOpacity>
                </View>

        
        </View>
        <Text className=''>{item.name}</Text>
        <View className='flex-row justify-between'>
          <View className='flex-row p-1 gap-1'>
            <Ionicons name="flame-outline" size={19} color='gray' />
            <Text>{item.calories} Kcal </Text>
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

      <View style={{ flex: 1 }} className='mt-4'>
        <StaggeredList
          data={restaurants  }
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
