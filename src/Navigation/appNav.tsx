import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EditProfileScreen, HomeScreen, ProfileScreen, SelectPostScreen, SharePostScreen } from '../Screens';
const {Navigator, Screen} = createNativeStackNavigator();

const AppNav: FC = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="home" component={HomeScreen} />
      <Screen name="profile" component={ProfileScreen} />
      <Screen name="editprofile" component={EditProfileScreen} />
      <Screen name="selectpost" component={SelectPostScreen} />
      <Screen name="sharepost" component={SharePostScreen} />
    </Navigator>
  )
}

export default AppNav;