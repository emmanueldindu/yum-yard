import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { categories } from "../../../assets/data/data/home";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  return (
    <View className="p-1 mt-2 grid">
      <Text className="text-[18px]  text-[#0A2533] font-semibold ">
        Category
      </Text>
      <View className="flex h-[80px]     mt-1">
        <ScrollView
          className="gap-x-3 "
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {categories.map((category, index) => (
            <TouchableOpacity
              className={`h-10 w-[100px] mt-4 p-2 rounded-3xl items-center ${
                selectedCategory === index
                  ? "bg-[#70B9BE] text-white"
                  : "bg-slate-200 text-black"
              }`}
              key={index}
              onPress={() => setSelectedCategory(index)}
            >
              <Text
                className={`text-center my-auto text-[14px]  ${
                  selectedCategory === index ? "text-white" : "text-black"
                } `}
              >
                {category.text}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Categories;
