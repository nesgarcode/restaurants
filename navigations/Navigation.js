import React from 'react'
import { NavigationContainer } from '@react-navigation/native' 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


import RestaurantsStack from './RestaurantsStack'
import FavoritesStack from './FavoritesStack'
import TopRestaurantsStack from './TopRestaurantsStack'
import SearchStack from './SearchStack'
import AccountStack from './AccountStack'


const Tab = createBottomTabNavigator()

export default function Navigation() {
    return (
         <NavigationContainer>
             <Tab.Navigator>
                <Tab.Screen
                    name="restaurants"
                    options={{title: "Restaurantes"}}
                    component={RestaurantsStack}
                />
                <Tab.Screen
                    name="favorites"
                    component={FavoritesStack}
                    options={{title: "Favoritos"}}
                />
                <Tab.Screen
                    name="top-restaurants"
                    options={{title: "Top 5"}}
                    component={TopRestaurantsStack}
                />
                <Tab.Screen
                    name="search"
                    options={{title:"Buscar"}}
                    component={SearchStack}
                />
                <Tab.Screen
                    name="account"
                    options={{title: "Cuenta"}}
                    component={AccountStack}
                />
             </Tab.Navigator>
         </NavigationContainer>
    )
}
