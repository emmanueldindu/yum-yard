import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, {useLayoutEffect} from 'react'
import ParallaxScrollView from '../components/ParallaxScrollView';
import img from '../../assets/data/data/11.jpg'
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
const Details = ({route}) => {
  const { item } = route.params;


  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerTitle: '',
      headerLeft: () => (<TouchableOpacity className='w-[40px] h-[40px] bg-white items-center rounded-2xl  justify-center ' onPress={() => navigation.goBack()}>
        <Ionicons name='close-outline' size={22}  />
      </TouchableOpacity>),
      headerRight: () => (<TouchableOpacity className='w-[40px] h-[40px] bg-white items-center rounded-2xl justify-center '>
      <Ionicons name='heart-outline' size={22}  />
    </TouchableOpacity>),
    })
  })

  return (
    <ParallaxScrollView
    backgroundColor="white"
    contentBackgroundColor="white"
    parallaxHeaderHeight={300}
    stickyHeaderHeight={110}
    renderStickyHeader={() => (
      <View className='bg-white ml-16 h-[100px] justify-end'>
        <Text className='text-xl '>{item.name}</Text>
      </View>
    )}
    renderBackground = {() => <Image source={item.img} resizeMode='cover' className='w-full h-full'/> }
    renderForeground={() => (
     <View style={{ height: 300, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text></Text>
      </View>
    )}>
    <View className='mt-[-20px] bg-white rounded-t-3xl  w-full ' style={{ height: 500 }}>
      <Text>Scroll me</Text>
    </View>
  </ParallaxScrollView>
  )
}

export default Details