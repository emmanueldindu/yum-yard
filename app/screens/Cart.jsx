import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import useCartStore from "../Store/CartStore";
import { Ionicons } from "@expo/vector-icons";
import ConfettiCannon from 'react-native-confetti-cannon';

const Cart = () => {
  const { totalPrice, totalCount, items, removeItem, clearCart } = useCartStore();
  const [order, setOrder] = useState(false);

  const handleRemoveCart = (id) => {
    removeItem(id);
  };

  const startCheckOut = () => {
    setOrder(true);
    clearCart();
  };

  const renderItem = ({ item }) => (
    <View key={item.id} className="flex-row bg-white p-4 h-[100px] justify-between">
      <View className="flex-row w-[70%] gap-x-2">
        <Image
          source={item.img}
          className="h-[75px] w-[75px] rounded-2xl"
        />
        <View className="p-2 gap-y-2">
          <Text className="text-sm text-center">{item.name}</Text>
          <Text className="text-xl font-[600]">$ {item.price}</Text>
        </View>
      </View>
      <View className="grid gap-y-5 justify-center">
        <Text className="text-center">{item.quantity}</Text>
        <TouchableOpacity onPress={() => handleRemoveCart(item.id)}>
          <Ionicons name="trash-outline" size={16} color={"red"} />
        </TouchableOpacity>
      </View>
    </View>
  );
  const showSummary = items.length > 0;
  return (
    <View className="flex-1">
      {order && <ConfettiCannon count={400} origin={{ x: -10, y: 0 }} fallSpeed={2500} autoStart={true} />}
      {order && (<View className='w-full h-full items-center mt-12 '> 
<Text className='mx-auto text-2xl font-semibold  '>Thanks for shopping on yum yard!!</Text>
      </View>)}
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />

{showSummary && (
        <View className="w-[99%] bg-white mb-8 rounded-2xl mx-auto">
          <View className="w-full justify-between flex-row mt-3 p-4">
            <Text className="text-sm text-[#929494]">Item total:</Text>
            <Text className="text-[16px] font-semibold">$ {totalPrice}</Text>
          </View>

          <View className="w-full justify-between flex-row p-4">
            <Text className="text-sm text-[#929494]">Delivery fee:</Text>
            <Text className="text-[16px] font-semibold">$ 10</Text>
          </View>

          <View className="w-full justify-between mt-3 flex-row p-4">
            <Text className="text-[20px]">Total:</Text>
            <Text className="text-[20px] font-bold">$ {totalPrice + 10}</Text>
          </View>

          <TouchableOpacity
            onPress={startCheckOut}
            className='w-[95%] justify-center items-center mx-auto h-[60px] mt-2 rounded-3xl mb-3 bg-black'
          >
            <Text className='text-white text-xl'>Order Now</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Cart;