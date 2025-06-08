import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Register from '../screens/Register';
import { useAuth } from '../context/AuthContext';
import Profile from '../screens/Profile';

export type MainStackParamList = {
    Login: undefined;
    Register: undefined;
    Profile: undefined;
};

const Main = createNativeStackNavigator<MainStackParamList>();

const MainNavigator = () => {
    const auth = useAuth();
    const user = auth?.user;
    console.log('MainNavigator rendered', user);
    return (
        <Main.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login" >
            <Main.Screen name="Login" component={Login} />
            <Main.Screen name="Register" component={Register} />
            <Main.Screen name="Profile" component={Profile} />
        </Main.Navigator>
    );
};

export default MainNavigator;
