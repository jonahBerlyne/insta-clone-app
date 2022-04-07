import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
const {Navigator, Screen} = createNativeStackNavigator();

const AppNav: FC = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="home" component={HomeScreen} />
    </Navigator>
  )
}

export default AppNav;