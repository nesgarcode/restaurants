import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Restaurats from '../screens/Restaurants'


const Stack = createStackNavigator()

export default function RestaurantsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="restaurants"
                component={Restaurats}
                options={{title:"Restaurantes"}}
            />
        </Stack.Navigator>
    )
}
