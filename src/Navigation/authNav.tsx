import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen, RegisterScreen } from '../Screens';
const {Navigator, Screen} = createNativeStackNavigator();

const AuthNav: FC = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
     <Screen name="login" component={LoginScreen} />
     <Screen name="register" component={RegisterScreen} />
    </Navigator>
  );
}

export default AuthNav;