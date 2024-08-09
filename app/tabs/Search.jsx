import { View, Text, SafeAreaView, TouchableOpacity, TextInput, ScrollView, Image } from "react-native";
import React, {useState} from "react";
import { Feather, Ionicons } from "@expo/vector-icons";
import { restaurants } from "../../assets/data/data/home";
import { useNavigation } from "@react-navigation/native";

const Search = () => {
  const [searchKey, setSearchKey] = useState('')
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);
  const navigation = useNavigation()

  const handleSearch = (text) => {
    setSearchKey(text);
    if (text) {
      const filteredData = restaurants.filter(restaurant =>
        restaurant.name.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredRestaurants(filteredData);
    } else {
      setFilteredRestaurants(restaurants);
    }
  };
  return (
    <SafeAreaView>
      <View className='grid px-4 '>
        <Text className='mt-4 text-center text-[20px] font-bold  text-[#0A2533] '>Search</Text>
        <View className="  flex-row   content-center  border border-[#97A2B0]  rounded-xl px-3 my-6 h-14 w-full">
          <TouchableOpacity className="my-auto">
            <Feather name="search" size={22} className="my-auto" />
          </TouchableOpacity>
          <View className="rounded-sm justify-start items-start">
            <TextInput
              className="w-full h-full px-2"

              value={searchKey}
              
              onChangeText={handleSearch}
              placeholder="Search your favourite meal"
            />
          </View>
          <View>
          
            </View>
          </View>

          <ScrollView>
          {filteredRestaurants.length > 0 ? (
            filteredRestaurants.map((item) => (
              <TouchableOpacity
               key={item.id} 
               className="rounded-2xl shadow-md bg-white my-2 p-4"
               onPress={() => navigation.navigate("Details", { item })}
               >
                <Image
                  source={ item.img } // Adjust if using local images
                  className="w-full h-48 rounded-2xl"
                />
                <Text className="text-lg font-semibold mt-2">{item.name}</Text>
                <Text className="text-gray-500">{item.calories} Kcal | {item.duration} mins</Text>
              </TouchableOpacity>
            ))
          ) : (
            <Text className="text-center mt-4">No results found</Text>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Search;
