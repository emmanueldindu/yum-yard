import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomHeader from '../components/CustomHeader'
import Featured from '../components/Featured'
import Categories from '../components/Categories'
// import { SafeAreaView } from 'react-native'

const Home = () => {
  return (
    <SafeAreaView className=''>
      <View className='mt-4 px-4 w-full'>
        <CustomHeader />
        <Featured />
        <Categories /> 

      </View>

    </SafeAreaView>
  )
}

export default Home