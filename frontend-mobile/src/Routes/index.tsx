import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Login } from '../pages';
import { colors } from '../styles';
import { RightHeader, LeftHeader } from '../components';

const Stack = createStackNavigator();

const Routes = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitle: '',
                headerStyle: {
                    backgroundColor: colors.primary,
                },
                headerLeft: () => <LeftHeader />,
                headerRight: () => <RightHeader />
            }}
        >
            <Stack.Screen
                name="Home"
                component={Home}
            />
            <Stack.Screen
                name="Login"
                component={Login}
            />
        </Stack.Navigator>
    );
}

export default Routes;

