import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import Categoryooo from "./Screen/Category";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Mealsoverviewscreen from "./Screen/Mealsoverviewscreen";
import Mealsummarys from "./Screen/Mealsumarry";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
//import { Favourateprovide, Favourateprovider } from './store/context/favouratecontext';
import { Provider } from "react-redux";
import store from "./store/redux/store";
import Favourate from "./Screen/Favourate";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Drawernavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#3f2f25" },
        drawerContentStyle: { backgroundColor: "#351401" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "yellow",
        drawerActiveBackgroundColor: "grey",
      }}
    >
      <Drawer.Screen
        name="Allcategories"
        component={Categoryooo}
        options={{
          title: "All Catigories",
          drawerIcon: ({ size, color }) => (
            <Ionicons size={size} color={color} name="list" />
          ),
        }}
      />
      <Drawer.Screen
        name="Favuratescreen"
        component={Favourate}
        options={{
          drawerIcon: ({ size, color }) => (
            <Ionicons size={size} color={color} name="star" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#351401" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#3f2f25" },
            }}
          >
            <Stack.Screen
              name="Mealscatogories"
              component={Drawernavigation}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={Mealsoverviewscreen}
            />

            <Stack.Screen
              name="Mealsummary"
              component={Mealsummarys}
              options={{ title: "About The Meal" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}
