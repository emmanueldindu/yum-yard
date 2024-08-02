import { View, Text, FlatList } from 'react-native'
import React from 'react'
import useCartStore from "../Store/CartStore";

const Cart = () => {

    const {totalPrice, totalCount, items} = useCartStore()
  return (
    <View className='grid'>
<FlatList  
data={items}
renderItem={({item}) => (
    <View key={item.id} className='flex-row bg-white p-4  justify-between'>
        <Text >{item.name}</Text>
        <Text>delete</Text>

        </View>
)}
/>     
    </View>
  )
}

export default Cart