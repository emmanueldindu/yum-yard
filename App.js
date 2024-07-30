import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ButtomTab from "./app/navigation/ButtomTab";
import Notification from "./app/tabs/Notification";
import Search from "./app/tabs/Search";
import Profile from "./app/tabs/Profile";
import Details from "./app/screens/Details";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <GestureHandlerRootView>
    
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
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
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
