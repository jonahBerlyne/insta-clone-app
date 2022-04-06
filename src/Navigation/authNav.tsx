import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../Screens/AuthScreens/LoginScreen';
import RegisterScreen from '../Screens/AuthScreens/RegisterScreen';
const {Navigator, Screen} = createNativeStackNavigator();

const AuthNav: FC = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
     <Screen name="register" component={RegisterScreen} />
     <Screen name="login" component={LoginScreen} />
    </Navigator>
  )
}

export default AuthNav;