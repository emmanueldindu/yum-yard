import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../components/Home/CustomHeader";
import Featured from "../components/Home/Featured";
import Categories from "../components/Home/Categories";
import Meals from "../components/Home/Meals";
// import { SafeAreaView } from 'react-native'

const Home = () => {
  return (
    <SafeAreaView className="">
      <ScrollView>
      <View className="mt-4 px-4 w-full">
        <CustomHeader />
        <Featured />
        <Categories />
        <Meals />
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
