import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import img from '../../assets/data/data/profile.jpg'
import { Feather } from '@expo/vector-icons'

const Profile = () => {
  return (
    <SafeAreaView>
   <View className='w-full'>
      <View className='w-full h-[300px] justify-center grid items-center bg-gray-300'>
<Image
source={img}
className='w-[100px]  h-[100px] rounded-full'
/>
<Text className='mt-4 text-[16px] font-semibold'>Alena Sabyn</Text>
<Text className='mt-4'>sabynalena65@gmail.com</Text>
      </View>
      <View className='mt-4 grid p-4'>
      <View>
          <TouchableOpacity className="flex-row justify-between items-center p-3">
            <View className="flex-row gap-x-2 items-center">
             
              <Text className="text-center font-bold ">My Orders</Text>
            </View>

            <Feather
              name="chevron-right"
              className="items-center"
              color={"#A5A1A1"}
              size={22}
            />
          </TouchableOpacity>
          <View className="bg-gray-300  mt-2 w-full h-[1px] "></View>

        </View>
        <View>
          <TouchableOpacity className="flex-row justify-between items-center p-3">
            <View className="flex-row gap-x-2 items-center">
             
              <Text className="text-center font-bold ">My Favorites</Text>
            </View>

            <Feather
              name="chevron-right"
              className="items-center"
              color={"#A5A1A1"}
              size={22}
            />
          </TouchableOpacity>
          <View className="bg-gray-300  mt-2 w-full h-[1px] "></View>

        </View>

        <View>
          <TouchableOpacity className="flex-row justify-between items-center p-3">
            <View className="flex-row gap-x-2 items-center">
             
              <Text className="text-center font-bold ">Shipping Address</Text>
            </View>

            <Feather
              name="chevron-right"
              className="items-center"
              color={"#A5A1A1"}
              size={22}
            />
          </TouchableOpacity>
          <View className="bg-gray-300  mt-2 w-full h-[1px] "></View>

        </View>

        <View>
          <TouchableOpacity className="flex-row justify-between items-center p-3">
            <View className="flex-row gap-x-2 items-center">
             
              <Text className="text-center font-bold ">My Saved Cards</Text>
            </View>

            <Feather
              name="chevron-right"
              className="items-center"
              color={"#A5A1A1"}
              size={22}
            />
          </TouchableOpacity>
          <View className="bg-gray-300  mt-2 w-full h-[1px] "></View>

        </View>

        <View>
          <TouchableOpacity className="flex-row justify-between items-center p-3">
            <View className="flex-row gap-x-2 items-center">
             
              <Text className="text-center font-bold ">Gift Cards and Vouchers</Text>
            </View>

            <Feather
              name="chevron-right"
              className="items-center"
              color={"#A5A1A1"}
              size={22}
            />
          </TouchableOpacity>
          <View className="bg-gray-300  mt-2 w-full h-[1px] "></View>

        </View>

        <View>
          <TouchableOpacity className="flex-row justify-between items-center p-3">
            <View className="flex-row gap-x-2 items-center">
             
              <Text className="text-center font-bold ">Logout</Text>
            </View>

            <Feather
              name="chevron-right"
              className="items-center"
              color={"#A5A1A1"}
              size={22}
            />
          </TouchableOpacity>
          <View className="bg-gray-300  mt-2 w-full h-[1px] "></View>

        </View>

      </View>
   </View>
   
    </SafeAreaView>
  )
}

export default Profile