import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ButtomTab from "./app/navigation/ButtomTab";
import Notification from "./app/tabs/Notification";
import Search from "./app/tabs/Search";
import Profile from "./app/tabs/Profile";
import Details from "./app/screens/Details";
import Toast from 'react-native-toast-message';
import { Ionicons } from "@expo/vector-icons";
import Cart from "./app/screens/Cart";


const Stack = createNativeStackNavigator();

export default function App() {

  return (

    
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Bottom Navigation"
            component={ButtomTab}
            options={{ headerShown: false }}
          ></Stack.Screen>

          <Stack.Screen
            name="Search"
            component={Search}
            options={{ headerShown: false }}
          ></Stack.Screen>

          <Stack.Screen
            name="Notification"
            component={Notification}
            options={{ headerShown: false }}
          ></Stack.Screen>

          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ headerShown: false }}
          ></Stack.Screen>

          <Stack.Screen
            name="Details"
            component={Details}
            options={{ headerShown: true }}
          ></Stack.Screen>

         <Stack.Screen 
          name="Cart"
          component={Cart}
          options={({ navigation }) => ({
            presentation: 'modal',
            headerTitle: 'Cart',
            headerShadowVisible: false,
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name='close-outline' color='#000' size={26} />
              </TouchableOpacity>
            ),
          })}
          >

          </Stack.Screen> 
          
        </Stack.Navigator>
        <Toast  />
      </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#70B9BE",
    alignItems: "center",
    justifyContent: "center",
  },
});
