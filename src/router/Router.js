import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../screens/Splash';
import Login from '../screens/Login';
import Home from '../screens/Home';


const Stack = createStackNavigator();

function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode={'none'}>
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;
