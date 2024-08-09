import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import favStore from "../Store/FavouriteStore";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";
const Favourites = () => {
  const navigation = useNavigation();
  const { favourites, addFavourites, removeFavourites } = favStore();
 



  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className=" items-center  flex-wrap  justify-between p-1 gap-y-3 mt-12  flex-row w-[100%] ">
          {favourites.length > 0 ? (
            favourites.map((item, index) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("Details", { item })}
                key={index}
                className="rounded-2xl shadow-xl h-[200px] grid bg-white mx-auto w-[45%]"
              >
                <Image
                  source={item.img}
                  className="w-[90%] mt-2 rounded-2xl mx-auto h-[120px] "
                />
               
                <View className="p-2">
                  <Text className="p-1 font-semibold">{item.name}</Text>
                  <View className="flex-row justify-between">
                    <View className="flex-row p-1 gap-1">
                      <Ionicons
                        name="flame-outline"
                        size={16}
                        color="#97A2B0"
                      />
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
                </View>
                {/* Display additional item details here */}
              </TouchableOpacity>
            ))
          ) : (
            <Text>No favourites yet</Text>
          )}
          {/* <Text className='text-3xl'>jdjd</Text> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Favourites;
