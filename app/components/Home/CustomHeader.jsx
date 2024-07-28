import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const CustomHeader = () => {
  return (
    <View className='w-full justify-between items-center flex-row p-1'>

      <View className='grid gap-y-2'>
        <View className='flex-row items-center gap-x-1'>
        <Ionicons name='sunny-outline' size={22} color={'#4D8194'} />
        <Text className='text-[#0A2533] text-[16px]'>Good Morning</Text>
        </View>
        <Text className='items-center text-2xl font-semibold text-[#0A2533]'>
        Alena Sabyan
        </Text>
      </View>
      <View className='items-center'>
        <Ionicons name='cart-outline' size={25} color={'black'} />
      </View>
    </View>
  )
}

export default CustomHeader