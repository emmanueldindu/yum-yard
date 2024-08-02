import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React, { useLayoutEffect } from "react";
import ParallaxScrollView from "../components/ParallaxScrollView";
import img from "../../assets/data/data/11.jpg";
import { useNavigation } from "@react-navigation/native";
import Toast from 'react-native-toast-message';
import useCartStore from "../Store/CartStore";
import { Ionicons } from "@expo/vector-icons";
const Details = ({ route }) => {
  const { item } = route.params;

  const navigation = useNavigation();
  const totalCount = useCartStore((state) => state.totalCount);
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem(item);
    Toast.show({
      type: 'success',
      text1: 'Item Added to Cart',
      text2: `${item.name} has been added to your cart.`,
      visibilityTime: 3000, 
    });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerTitle: "",
      headerLeft: () => (
        <TouchableOpacity
          className="w-[40px] h-[40px] bg-white items-center rounded-2xl  justify-center "
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="close-outline" size={22} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity className="w-[40px] h-[40px] bg-white items-center rounded-2xl justify-center ">
          <Ionicons name="heart-outline" size={22} />
        </TouchableOpacity>
      ),
    });
  });

  return (
    <View className="flex-1 ">
      <ParallaxScrollView
        backgroundColor="white"
        contentBackgroundColor="white"
        parallaxHeaderHeight={300}
        stickyHeaderHeight={110}
        renderStickyHeader={() => (
          <View className="bg-white ml-16 h-[100px] justify-end">
            <Text className="text-xl ">{item.name}</Text>
          </View>
        )}
        renderBackground={() => (
          <Image
            source={item.img}
            resizeMode="cover"
            className="w-full h-full"
          />
        )}
      
      >
        <View
          className="mt-[-20px] bg-white rounded-t-3xl grid  w-full p-5 "
          style={{ height: 500 }}
        >
          <View className='flex-row justify-between p-2 '>
          <Text className="text-2xl mt-3 font-semibold text-[#0A2533]">
            {item.name}
          </Text>

          <Text className="text-xl mt-3 font-semibold text-[#0A2533]">
           $ {item.price}
          </Text>
          </View>
  
          <Text className="mt-4 leading-12 text-sm text-[#748189]">
            {item.description}
          </Text>

          <View className="w-full mt-6 flex-row">
            <View className="flex-row w-[50%] h-[60px]  bg-white items-center">
              <View className="h-12 w-12 m rounded-xl items-center justify-center bg-[#EBF0F6]">
                <Ionicons name="time-outline" size={24} color={"#0A2533"} />
              </View>
              <Text className="text-center font-semibold text-[#0A2533] items-center mx-auto ">
                {item.duration} m
              </Text>
            </View>

            <View className="flex-row w-[50%] h-[60px]  bg-white items-center">
              <View className="h-12 w-12 m rounded-xl items-center justify-center bg-[#EBF0F6]">
                <Ionicons name="flame-outline" size={24} color={"#0A2533"} />
              </View>
              <Text className="text-center font-semibold text-[#0A2533] items-center mx-auto ">
                {item.calories} Kcal
              </Text>
            </View>

            <View></View>
          </View>

          <View className="w-full mt-6 flex-row">
            <View className="flex-row w-[50%] h-[60px]  bg-white items-center">
              <View className="h-12 w-12 m rounded-xl items-center justify-center bg-[#EBF0F6]">
                <Ionicons name="happy-outline" size={24} color={"#0A2533"} />
              </View>
              <Text className="text-center font-semibold text-[#0A2533] items-center mx-auto ">
                {item.rating}{" "}
              </Text>
            </View>

            <View className="flex-row w-[50%] h-[60px]  bg-white items-center">
              <View className="h-12 w-12 m rounded-xl items-center justify-center bg-[#EBF0F6]">
                <Ionicons name="car-outline" size={24} color={"#0A2533"} />
              </View>
              <Text className="text-center font-semibold text-[#0A2533] items-center mx-auto ">
                {item.distance}{" "}
              </Text>
            </View>

           
          </View>
          <View className='grid mt-4 w-full'>
              <Text className='text-black text-xl font-semibold'>Ingredients</Text>
              <Text className='mt-4 leading-12 text-sm text-[#748189]'>{item.ingrideints}</Text>
            </View>
        </View>
      </ParallaxScrollView>
      <View style={styles.footer} className='flex-row px-8'>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')} className="h-14 w-14   rounded-full justify-center  items-center bg-black">
          <Ionicons
            name="bag-outline"
            color={'white'}
            // className='justify-center my-auto'
            size={19}
          />
           {totalCount > 0 && (
        <TouchableOpacity  style={styles.badgeContainer}>
          <Text style={styles.badgeText}>{totalCount}</Text>
        </TouchableOpacity>
      )}
        </TouchableOpacity>

        <TouchableOpacity
         onPress={handleAddToCart}
         className='h-[70px]  w-[180px] items-center text-center rounded-3xl bg-[#0A2533]'>
          <Text className='text-white my-auto text-xl'>Add To Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    bottom: 15,
    left: 0,
  
    right: 0,
    backgroundColor: "white",
    padding: 10,
    justifyContent: "space-between",
    borderTopWidth: 1,
    height: 100,
    borderTopColor: "#e0e0e0",
    alignItems: "center",
  },

  badgeContainer: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: "red",
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});
export default Details;
