import { View, Text, Pressable, Image } from "react-native";
import React from "react";

import { restaurants } from "../../../assets/data/data/home";
import StaggeredList from "@mindinventory/react-native-stagger-view";

export default function Meals() {


 

  const renderChildren = (item) => {
    return (
      <View className='rounded-3xl' style={getChildrenStyle()} key={item.id}>
        <View >
          <Image
            onError={() => {}}
            className='w-full h-full rounded-3xl '
            source={item.img}
            resizeMode={"cover"}
          />

        
        </View>
      </View>
    );
  };

  const getChildrenStyle = () => {
    return {
    
      height: Number(Math.random() * 20 + 12) * 10,
      backgroundColor: "gray",
      margin: 4,
      borderRadius: 18,
    };
  };

  return (
    <View className="p-1 mt-2 grid h-auto ">
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
