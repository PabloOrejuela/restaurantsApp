import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Credits from '../screens/Credits';

const Stack = createStackNavigator();


export default function CreditsStack() {
    return (   
        <Stack.Navigator>
            <Stack.Screen 
                name = "credits"
                component = {Credits}
                options = {{
                    title: "Créditos"
                }}
            />
        </Stack.Navigator>
    )
}
