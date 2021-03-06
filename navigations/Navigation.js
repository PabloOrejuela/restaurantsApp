import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements/dist/icons/Icon";

//Importo componentes de pantallas navegacion STACK
import RestaurantsStack from "./RestaurantsStack";
import AccountStack from "./AccountStack";
import CreditsStack from "./CreditsStack";
import FavoritesStack from "./FavotitesStack";
import TopRestaurantsStack from "./TopRestaurantsStack";
import SearchStack from "./SearchStack";


const Tab = createBottomTabNavigator();

export default function Navigation() {
  //agregamos iconos para los menus
  const screenOptions = (route, color) => {
    let iconName;

    switch (route.name) {
      case "restaurants":
        iconName = "compass-outline";
        break;

      case "favorites":
        iconName = "heart-outline";
        break;

      case "top-restaurants":
        iconName = "star-outline";
        break;

      case "search":
        iconName = "magnify";
        break;

      case "account":
        iconName = "home-outline";
        break;

      case "credits":
        iconName = "file-code-outline";
        break;
    }

    return (
        <Icon 
            type = "material-community"
            name = {iconName}
            size = {22}
            color = {color}
        />
    )
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="account"
        tabBarOptions = {{
            inactiveTintColor: "#c7b4ab",
            activeTintColor: "#521e08"
        }}
        screenOptions= {({ route }) => ({
            tabBarIcon: ({color}) => screenOptions(route, color)
        })}
      >
        <Tab.Screen
          name="restaurants"
          component={RestaurantsStack}
          options={{ title: "Restaurantes" }}
        />
        <Tab.Screen
          name="favorites"
          component={FavoritesStack}
          options={{ title: "Favoritos" }}
        />
        <Tab.Screen
          name="top-restaurants"
          component={TopRestaurantsStack}
          options={{ title: "Top 5" }}
        />
        <Tab.Screen
          name="search"
          component={SearchStack}
          options={{ title: "Buscar" }}
        />
        <Tab.Screen
          name="account"
          component={AccountStack}
          options={{ title: "Cuenta" }}
        />
        <Tab.Screen
          name="credits"
          component={CreditsStack}
          options={{ title: "Cr??ditos" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
